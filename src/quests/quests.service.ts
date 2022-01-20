import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { format } from 'date-fns';
import {
  Connection, Model,
  UpdateWriteOpResult
} from 'mongoose';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { AdventurerProfile } from 'src/requests/entities/adventurerProfile.entity';
import { AdventurersService } from './../adventurers/adventurers.service';
import { Adventurer } from './../adventurers/entities/adventurer.entity';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { QuestStatus } from './../requests/entities/request.entity';
import { RequestsService } from './../requests/requests.service';
import { TransactionType } from './../transactions/entities/transaction.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
import { Quest } from './entities/quest.entity';
const mongoose = require('mongoose');
var lodash = require('lodash');

@Injectable()
export class QuestsService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
    @InjectConnection() private readonly connection: Connection,
    @Inject(forwardRef(() => RequestsService))
    private readonly requestService: RequestsService,
    @Inject(forwardRef(() => AdventurersService))
    private readonly adventurerService: AdventurersService,
    @Inject(forwardRef(() => TransactionsService))
    private readonly transactionsService: TransactionsService,
    @Inject(forwardRef(() => AdministratorsService))
    private readonly administratorsService: AdministratorsService,
  ) {}

  async findAll(adminId?: string): Promise<Quest[] | any> {
    if (adminId) await this.setAllStatus(adminId);

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
    const _request = await this.requestService.findOne(request);
    let groupToPush = []
    groups.map(group => {
      groupToPush.push(null)
    })
    groups.map((group) => {
      const index = _request.requiredProfiles.findIndex(
        (profile: any) =>
          profile.speciality.id === group.reqProfile.id &&
          profile.experience === group.reqProfile.experience,
      );
      groupToPush[index] = group.adventurer
    });
     const quest = await this.questModel.create({
      request: new mongoose.Types.ObjectId(request),
      groups: groupToPush,
      createdAt: new Date(),
      updatedAt: new Date()
    }); 
    return quest.save();
  }

  async changeStatus(
    id: string,
    setStatusQuest: SetStatusQuestDto,
  ): Promise<UpdateWriteOpResult> {
    const { status } = setStatusQuest;
    return this.requestService.changeStatusByID(id, status);
  }

  async setAllStatus(adminId: string) {
    const quests = await this.questModel
      .find({})
      .populate('request')
      .populate('groups')
      .exec();

    quests.map(async (quest) => {
      if(quest.request.status !== "Rejected") {
        if (format(quest.request.dateDebut, 't') < format(new Date(), 't')) {
          if (
            format(quest.request.dateDebut, 't') + quest.request.duration <
            format(new Date(), 't')
          ) {
            const rate = await this.succesRate(
              quest.groups,
              quest.request.requiredProfiles,
            );
            console.log({rate})
            if (Math.random() < rate) {
              const changeStatus = await this.requestService.changeStatusByID(
                quest.request.id,
                QuestStatus.Failed,
              );
              console.log({changeStatus})
            } else {
              const addBounty =await this.administratorsService.addBounty(
                adminId,
                quest.request.bounty * 0.8,
              );
              const successAdventurer = await this.successAdventurer(
                quest.groups,
                quest.request.duration,
                quest.request.awardedExperience,
              );
              await this.requestService.changeStatusByID(
                quest.request.id,
                QuestStatus.Succeeded,
              );
            }
          } else {
            await this.requestService.changeStatusByID(
              quest.request.id,
              QuestStatus.Pending,
            );
          }
        }
      }
    });
  }

  async succesRate(
    groups: Adventurer[],
    requiredProfiles: AdventurerProfile[],
  ) {
    var expGlobal: number[] = await Promise.all(
      groups.map(async (group, index): Promise<number> => {
        return await this.individualRate(
          group.experience,
          requiredProfiles[index].experience,
        );
      }),
    );
    return (lodash.sum(expGlobal) / groups.length) * 0.8;
  }

  async individualRate(experienceAdventurer: number, expRequired: number) {
    return expRequired !== 0
      ? Math.min(experienceAdventurer, expRequired) / expRequired
      : 0;
  }

  async successAdventurer(
    groups: Adventurer[],
    duration: number,
    awardedExperience: number,
  ) {
    groups.map(async (adventurer: Adventurer) => {
      const session = await this.connection.startSession();
      session.startTransaction();

      const amount =
        adventurer.baseDailyRate *
        (1 + 0.5 * Math.log(adventurer.experience)) *
        (duration / 60 / 60 / 24);
      try {
        await this.adventurerService.updateAmount(
          adventurer.id,
          { amount: amount > 0 ? amount : 0 },
          session,
        );
        await this.transactionsService.create({
          amount: amount > 0 ? amount : 0,
          type: TransactionType.AdventurerPayment,
        });
        await this.adventurerService.updateExp(
          adventurer.id,
          { experience: awardedExperience },
          session,
        );

        await session.commitTransaction();
      } catch (e) {
        await session.abortTransaction();
        throw e;
      } finally {
        session.endSession();
      }
    });
  }
}
