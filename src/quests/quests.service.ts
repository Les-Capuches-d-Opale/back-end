import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { RequestsService } from './../requests/requests.service';
import { Quest } from './entities/quest.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
const mongoose = require('mongoose');

@Injectable()
export class QuestsService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
    private readonly requestService: RequestsService,
  ) {}

  async findAll(
    paginationQueryDto: PaginationQueryDto,
  ): Promise<Quest[] | any> {
    const { limit = 25, offset = 0 } = paginationQueryDto;

    const quests = await this.questModel
      .find({})
      .populate('request')
      .populate('groups')
      .limit(limit)
      .skip(offset)
      .exec();

    const counts = await this.questModel.find({}).count();

    await Promise.all(
      quests.map(async (quest) => {
        const requiredProfilesIds = quest.request.requiredProfiles.map(
          (profile) => profile.speciality,
        );
        const groupIds = quest.groups.map((profile) => profile.speciality);

        await Promise.all(
          requiredProfilesIds.map(async (id, index) => {
            quest.request.requiredProfiles[index].speciality =
              await this.specialityModel.findById(id);
          }),
        );

        await Promise.all(
          groupIds.map(async (id, index) => {
            quest.groups[index].speciality =
              await this.specialityModel.findById(id);
          }),
        );
      }),
    );

    return { quests, counts };
  }

  async findOne(id: string): Promise<Quest | any> {
    const quest = await this.questModel
      .findById(id)
      .populate('request')
      .populate('groups')
      .exec();

    const requiredProfilesIds = quest.request.requiredProfiles.map(
      (profile) => profile.speciality,
    );
    const groupIds = quest.groups.map((profile) => profile.speciality);

    await Promise.all(
      requiredProfilesIds.map(async (id, index) => {
        quest.request.requiredProfiles[index].speciality =
          await this.specialityModel.findById(id);
      }),
    );

    await Promise.all(
      groupIds.map(async (id, index) => {
        quest.groups[index].speciality = await this.specialityModel.findById(
          id,
        );
      }),
    );

    return quest;
  }

  async createQuest(createQuestDto: CreateQuestDto): Promise<Quest> {
    const { request, groups } = createQuestDto;
    const quest = await this.questModel.create({
      request: new mongoose.Types.ObjectId(request),
      groups: groups,
    });
    return quest.save();
  }

  async setStatus(
    setStatusQuest: SetStatusQuestDto,
  ): Promise<UpdateWriteOpResult> {
    const { request, status } = setStatusQuest;
    return this.requestService.setStatusByID(request, status);
  }
}
