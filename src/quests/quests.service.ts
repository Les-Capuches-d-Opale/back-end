import { Adventurer } from './../adventurers/entities/adventurer.entity';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { RequestsService } from './../requests/requests.service';
import { Quest } from './entities/quest.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
import { Request } from 'src/requests/entities/request.entity';
import { format } from 'date-fns';
import { AdventurerProfile } from 'src/requests/entities/adventurerProfile.entity';
const mongoose = require('mongoose');
var lodash = require('lodash');

@Injectable()
export class QuestsService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
    private readonly requestService: RequestsService,
  ) { }

  async findAll(): Promise<Quest[] | any> {

    await this.setAllStatus()

    const quests = await this.questModel
      .find({})
      .populate('request')
      .populate('groups')
      .exec();

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

    return quests;
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
    const quest = new this.questModel({
      request: new mongoose.Types.ObjectId(request),
      groups: groups,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return quest.save({ timestamps: true });
  }

  async changeStatus(
    setStatusQuest: SetStatusQuestDto,
  ): Promise<UpdateWriteOpResult> {
    const { request, status } = setStatusQuest;
    return this.requestService.changeStatusByID(request, status);
  }

  async setAllStatus() {
    const quests = await this.questModel
      .find({})
      .populate('request')
      .populate('groups')
      .exec();

    quests.map(async (quest) => {
      if (format(quest.request.dateDebut, 't') < format(new Date(), 't')) {
        if (format(quest.request.dateDebut, 't') + quest.request.duration < format(new Date(), 't')) {
          const rate = await this.succesRate(quest.groups, quest.request.requiredProfiles)
          if (Math.random() < rate) {
            await this.requestService.changeStatusByID(quest.request.id, "Failed")
          } else {
            await this.requestService.changeStatusByID(quest.request.id, "Success")
          }
        } else {
          await this.requestService.changeStatusByID(quest.request.id, "Pending")
        }
      }
    })
  }

  async succesRate(groups: Adventurer[], requiredProfiles: AdventurerProfile[]) {
    var expGlobal: number[] = await Promise.all(groups.map(async (group, index): Promise<number> => {
      return await this.individualRate(group.experience, requiredProfiles[index].experience)
    }));
    return (lodash.sum(expGlobal) / groups.length) * 0.8
  }

  async individualRate(experienceAdventurer: number, expRequired: number) {
    return expRequired !== 0 ? (Math.min(experienceAdventurer, expRequired) / expRequired) : 0
  }
}
