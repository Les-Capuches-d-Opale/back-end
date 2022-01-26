import { ItemsService } from './../items/items.service';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import {
  format,
  eachDayOfInterval,
  addSeconds,
  formatDistance,
} from 'date-fns';
import { Connection, Model, UpdateWriteOpResult } from 'mongoose';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { AdventurerProfile } from 'src/requests/entities/adventurerProfile.entity';
import { AdventurersService } from './../adventurers/adventurers.service';
import {
  Adventurer,
  UnavailabilityType,
  /* DayOffType, */
} from './../adventurers/entities/adventurer.entity';
import { Speciality } from './../adventurers/entities/speciality.entity';
import { QuestStatus } from './../requests/entities/request.entity';
import { RequestsService } from './../requests/requests.service';
import { TransactionType } from './../transactions/entities/transaction.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
import { Quest } from './entities/quest.entity';
import { FilterQuestDto } from './dto/filterQuest.dto';
import { sum } from 'lodash';
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

  async findAll(
    filterQueryDto: FilterQuestDto,
    adminId?: string,
  ): Promise<Quest[] | any> {
    const { limit = 25, offset = 0 } = filterQueryDto;

    if (adminId) await this.setAllStatus(adminId);

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
        if (
          filterQueryDto.type &&
          quest.request.status != filterQueryDto.type
        ) {
          quests.splice(quests.indexOf(quest), 1);
        }
      }),
    );

    if (filterQueryDto.type) {
      return { quests, counts: quests.length };
    }
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
    const _request = await this.requestService.findOne(request);
    const groupToPush = [];
    groups.map((group) => {
      groupToPush.push(null);
    });
    groups.map((group) => {
      const index = _request.requiredProfiles.findIndex(
        (profile: any) =>
          profile.id === group.reqProfile.id &&
          profile.experience === group.reqProfile.experience,
      );
      groupToPush[index] = group.adventurer;
    });
    const quest = await this.questModel.create({
      request: new mongoose.Types.ObjectId(request),
      groups: groupToPush,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    groups.map(async (group) => {
      await this.adventurerService.createUnavailability(group.adventurer, {
        dateStart: String(_request.dateDebut),
        dateEnd: String(_request.dateFin),
        type: UnavailabilityType.Request,
        requestId: request,
      });
    });

    this.changeStatus(request, { status: QuestStatus.Accepted });
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

    quests.map(async (quest) => {
      if (
        quest.request.status !== 'Rejected' &&
        quest.request.status !== 'Failed' &&
        quest.request.status !== 'Succeeded'
      ) {
        if (format(quest.request.dateDebut, 't') < format(new Date(), 't')) {
          if (format(quest.request.dateFin, 't') < format(new Date(), 't')) {
            const rate = await this.succesRate(
              quest.groups,
              quest.request.requiredProfiles,
            );

            const numberOfDayRequest = eachDayOfInterval({
              start: new Date(quest.request.dateDebut),
              end: new Date(quest.request.dateFin),
            }).length;

            await this.adventurerService.updateAdventurerItem(
              quest.groups,
              numberOfDayRequest,
            );

            await this.administratorsService.buyAllRequiredItems(
              adminId,
              quest.groups,
            );

            if (Math.random() < rate) {
              const changeStatus = await this.requestService.changeStatusByID(
                quest.request.id,
                QuestStatus.Failed,
              );
            } else {
              const addBounty = await this.administratorsService.addBounty(
                adminId,
                quest.request.bounty * 0.8,
              );
              const successAdventurer = await this.successAdventurer(
                quest.groups,
                numberOfDayRequest,
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
    const expGlobal: number[] = await Promise.all(
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
    durationDay: number,
    awardedExperience: number,
  ) {
    groups.map(async (adventurer: Adventurer) => {
      const session = await this.connection.startSession();
      session.startTransaction();

      const amount =
        adventurer.baseDailyRate *
        (1 + 0.5 * Math.log(adventurer.experience)) *
        (durationDay / 60 / 60 / 24);
      try {
        await this.adventurerService.updateAmount(
          adventurer.id,
          { amount: amount > 0 ? amount : 0 },
          session,
        );
        await this.transactionsService.create(
          {
            amount: amount > 0 ? amount : 0,
            type: TransactionType.AdventurerPayment,
          },
          session,
        );
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

  async rateQuest(id: string): Promise<number> {
    let paiementSum = [];
    //const items = await this.adventurersService.getRepairingItems()
    const quest = await this.findOne(id);

    const duration = formatDistance(
      quest.request.dateDebut,
      quest.request.dateFin,
    ).split(' ')[0];

    quest.groups.map((profile) => {
      const amount =
        profile.baseDailyRate *
        (1 + 0.5 * Math.log(profile.experience)) *
        parseInt(duration);
      paiementSum.push(Math.ceil(amount));
    });

    return sum(paiementSum) / quest.request.bounty;
  }
}
