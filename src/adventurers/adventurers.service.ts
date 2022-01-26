import {
  forwardRef,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { add } from 'date-fns';
import { ClientSession, Model, UpdateWriteOpResult } from 'mongoose';
import { Item } from 'src/items/entities/item.entity';
import { ItemsService } from './../items/items.service';
import { QuestsService } from './../quests/quests.service';
import { RequestsService } from './../requests/requests.service';
import { CreateAdventurerDto } from './dto/createAdventurer.dto';
import { CreateUnavailabilityDto } from './dto/createUnavailability.dto';
import { FilterAdventurerQueryDto } from './dto/filterAdventurerQuery.dto';
import { FilterUnavailabilityDto } from './dto/FilterUnavailabilityDto.dto';
import { UpdateAmountAdventurerDto } from './dto/updateAmountDto.dto';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
import { UpdateUnavailabilityDto } from './dto/updateUnavailability.dto';
import { Adventurer, StatusItem } from './entities/adventurer.entity';
import { Speciality } from './entities/speciality.entity';
import { Unavailability } from './entities/unavailability.entity';
const ObjectId = require('mongoose').Types.ObjectId;
@Injectable()
export class AdventurersService {
  constructor(
    @InjectModel(Adventurer.name)
    private readonly adventurerModel: Model<Adventurer>,
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
    @InjectModel(Unavailability.name)
    private readonly unavailabilityModel: Model<Unavailability>,
    @Inject(forwardRef(() => QuestsService))
    private readonly questsService: QuestsService,
    @Inject(forwardRef(() => ItemsService))
    private readonly itemsService: ItemsService,
    @Inject(forwardRef(() => RequestsService))
    private readonly requestsService: RequestsService,
  ) {}

  async findAll(
    filterAdventurerQueryDto: FilterAdventurerQueryDto,
  ): Promise<Adventurer[] | any> {
    const { exactLevel, minLevel, name, speciality, isAvailableNow } =
      filterAdventurerQueryDto;

    if (exactLevel && minLevel) {
      throw new HttpException('You can only use level or minLevel', 400);
    }

    const adventurers = await this.adventurerModel
      .find({
        name: { $regex: name ? name : '', $options: 'i' },
        experience: {
          $gte: Math.floor(exactLevel) || Math.floor(minLevel) || 0,
          $lte: exactLevel ? Math.floor(exactLevel) + 0.99 : 1000000,
        },
      })
      .where(speciality ? { speciality: ObjectId(speciality) } : {})
      .populate('speciality')
      .lean()
      .exec();

    const quests = await this.questsService.findAll({});

    adventurers.forEach((adventurer) => {
      const adventurerHasQuests = quests.quests.filter((quest) => {
        const adventurersId = quest.groups.map((questAdventurer) =>
          questAdventurer._id.toString(),
        );
        return adventurersId.includes(adventurer._id?.toString());
      });

      if (!adventurerHasQuests.length)
        return (adventurer['isAvailableNow'] = true);

      adventurerHasQuests.forEach((adventurerQuest) => {
        const startDateQuest = new Date(adventurerQuest.request.dateDebut);
        const endDateQuest = new Date(adventurerQuest.request.dateFin);

        if (startDateQuest <= new Date() && endDateQuest >= new Date()) {
          return (adventurer['isAvailableNow'] = false);
        }

        return (adventurer['isAvailableNow'] = true);
      });
    });

    if (isAvailableNow !== undefined)
      return adventurers.filter(
        (adventurer) => adventurer['isAvailableNow'] === isAvailableNow,
      );

    return adventurers;
  }

  async findOne(id: string): Promise<Adventurer> {
    const adventurer = await this.adventurerModel
      .findById(id)
      .populate('speciality')
      .exec();

    if (!adventurer) {
      throw new NotFoundException(`Adventurer #${id} not found`);
    }

    return adventurer;
  }

  async create(createAdventurerDto: CreateAdventurerDto): Promise<Adventurer> {
    const baseDailyRate = (
      createAdventurerDto.baseDailyRate * 1 +
      0.5 * Math.log(createAdventurerDto.experience)
    ).toFixed(2);

    const adventurer = await this.adventurerModel.create({
      ...createAdventurerDto,
      baseDailyRate,
    });
    return adventurer.save();
  }

  async updateExp(
    id: string,
    updateExpAdventurerDto: UpdateExpAdventurerDto,
    session?: ClientSession,
  ): Promise<Adventurer> {
    return session
      ? await this.adventurerModel
          .findByIdAndUpdate(
            id,
            { $inc: { experience: updateExpAdventurerDto.experience } },
            { new: true },
          )
          .session(session)
      : await this.adventurerModel.findByIdAndUpdate(
          id,
          { $inc: { experience: updateExpAdventurerDto.experience } },
          { new: true },
        );
  }

  async updateAmount(
    id: string,
    updateAmountAdventurerDto: UpdateAmountAdventurerDto,
    session?: ClientSession,
  ): Promise<Adventurer> {
    let adventurer;

    if (session) {
      adventurer = await this.adventurerModel
        .findByIdAndUpdate(
          id,
          { $inc: { amount: updateAmountAdventurerDto.amount } },
          { new: true },
        )
        .session(session);
    } else {
      adventurer = await this.adventurerModel.findByIdAndUpdate(
        id,
        { $inc: { amount: updateAmountAdventurerDto.amount } },
        { new: true },
      );
    }

    if (!adventurer) {
      throw new NotFoundException(`Adventurer #${id} not found`);
    }

    return adventurer;
  }

  async getAllSpecialities(): Promise<Speciality[]> {
    return await this.specialityModel.find({}).exec();
  }

  async addItem(id: string, requiredItem: Item[], session: ClientSession) {
    const items = (
      await this.adventurerModel.findById(id, 'items').exec()
    ).items?.map((item) => item.item);

    const itemsToAdd = requiredItem.filter((item) => {
      return !items.some(
        (itemAdventurer) => itemAdventurer.toString() === item._id.toString(),
      );
    });

    return await this.adventurerModel
      .findByIdAndUpdate(
        id,
        {
          $push: {
            items: itemsToAdd.map((item) => {
              return {
                item: item._id,
                daysInUse: item.daysInUse || null,
                usedCharges: item.charges || null,
                status: StatusItem.OK,
              };
            }),
          },
        },
        { new: true },
      )
      .session(session);
  }

  async updateAdventurerItem(
    adventurers: Adventurer[],
    numberOfDayRequest: number,
  ) {
    const adventurersReturned = await this.adventurerModel.find({
      _id: { $in: adventurers.map((adventurer) => adventurer._id) },
    });

    return await Promise.all(
      adventurersReturned.map(async (adventurer) => {
        const items = await Promise.all(
          adventurer.items.map(async (item) => {
            if (item.item?._id) return this.itemsService.findOne(item.item._id);
          }),
        );

        await this.adventurerModel.findOneAndUpdate(
          {
            _id: adventurer._id,
            items: {
              $elemMatch: {
                status: StatusItem.OK,
                daysInUse: { $ne: null },
              },
            },
          },
          {
            $inc: {
              'items.$.daysInUse': -numberOfDayRequest,
            },
            $set: {
              'items.$.status': StatusItem.BROKEN,
            },
          },
          { new: true },
        );

        await this.adventurerModel.findOneAndUpdate(
          {
            _id: adventurer._id,
            items: {
              $elemMatch: {
                status: StatusItem.OK,
                usedCharges: { $ne: null },
              },
            },
          },
          {
            $inc: {
              'items.$.usedCharges': -numberOfDayRequest,
            },
            $set: {
              'items.$.status': StatusItem.BROKEN,
            },
          },
          { new: true },
        );

        await this.adventurerModel.findByIdAndUpdate(
          {
            _id: adventurer._id,
            items: {
              $elemMatch: {
                status: StatusItem.BROKEN,
                usedCharges: { $lte: 0 },
              },
            },
          },
          {
            $pull: {
              items: { status: StatusItem.BROKEN, usedCharges: { $lte: 0 } },
            },
          },
        );

        const brokenEquipments = await this.adventurerModel.aggregate([
          { $match: { _id: adventurer._id } },
          {
            $project: {
              items: {
                $filter: {
                  input: '$items',
                  as: 'item',
                  cond: {
                    $and: [
                      { $eq: ['$$item.status', StatusItem.BROKEN] },
                      { $lte: ['$$item.usedCharges', 0] },
                    ],
                  },
                },
              },
            },
          },
        ]);

        if (brokenEquipments[0].items && brokenEquipments[0].items.length > 0) {
          const brokenEquipmentsItems = await Promise.all(
            brokenEquipments[0].items.map(async (item) => {
              const itemReturned = await this.itemsService.findOne(item.item);
              const repairAt: Date = add(new Date(), {
                days: itemReturned.repairTime,
              });

              return {
                ...item,
                repairAt,
              };
            }),
          );

          await Promise.all(
            brokenEquipmentsItems.map(async (item) => {
              return await this.adventurerModel.findOneAndUpdate(
                {
                  _id: adventurer._id,
                  items: {
                    $elemMatch: { item: item.item },
                  },
                },
                {
                  $set: {
                    'items.$.repairAt': item.repairAt,
                    'items.$.status': StatusItem.REPAIRING,
                  },
                },
              );
            }),
          );
        }

        const repairedEquipments = await this.adventurerModel.aggregate([
          { $match: { _id: adventurer._id } },
          {
            $project: {
              items: {
                $filter: {
                  input: '$items',
                  as: 'item',
                  cond: {
                    $and: [
                      { $eq: ['$$item.status', StatusItem.REPAIRING] },
                      {
                        $lte: [
                          '$$item.repairAt',
                          { $lte: new Date().toISOString },
                        ],
                      },
                    ],
                  },
                },
              },
            },
          },
        ]);

        if (
          repairedEquipments[0].items &&
          repairedEquipments[0].items.length > 0
        ) {
          const repairedEquipmentsItems = await Promise.all(
            repairedEquipments[0].items.map(async (item: { item: string }) => {
              const itemReturned = await this.itemsService.findOne(item.item);

              return {
                item: item.item,
                daysInUse: itemReturned.durability,
                usedCharges: null,
                repairAt: null,
                status: StatusItem.OK,
              };
            }),
          );

          await Promise.all(
            repairedEquipmentsItems.map(async (item) => {
              return await this.adventurerModel.findOneAndUpdate(
                {
                  _id: adventurer._id,
                  items: {
                    $elemMatch: { item: item.item },
                  },
                },
                {
                  $set: {
                    'items.$.daysInUse': item.daysInUse,
                    'items.$.repairAt': item.repairAt,
                    'items.$.status': item.status,
                  },
                },
              );
            }),
          );
        }
      }),
    );
  }

  async getRepairingItems(): Promise<Adventurer[]> {
    const adventurers = await this.adventurerModel.aggregate([
      {
        $match: {},
      },
      {
        $project: {
          items: {
            $filter: {
              input: '$items',
              as: 'item',
              cond: {
                $eq: ['$$item.status', StatusItem.REPAIRING],
              },
            },
          },
        },
      },
    ]);

    return adventurers.filter((adventurer) => adventurer.items);
  }

  async createUnavailability(
    id: string,
    createUnavailability: CreateUnavailabilityDto,
  ): Promise<Unavailability> {
    if (createUnavailability.type === 'Request') {
      if (!createUnavailability.requestId) {
        throw new Error('Request ID is required');
      } else {
        const request = await this.requestsService.findOne(
          createUnavailability.requestId,
        );
        if (!request) {
          throw new Error("Request doesn't exist");
        }
      }
    }
    const data = await this.unavailabilityModel.create({
      ...createUnavailability,
    });

    if (data) {
      const adventurer = await this.adventurerModel.findOneAndUpdate(
        { id: id },
        {
          $push: {
            unavailabilities: ObjectId(data.id),
          },
        },
      );
    }

    return data;
  }

  async putUnavailability(
    id: string,
    updateUnavailability: UpdateUnavailabilityDto,
  ): Promise<UpdateWriteOpResult> {
    await this.adventurerModel.findById(id).populate('unavailabilities').exec();

    return await this.unavailabilityModel.updateOne(
      {
        id: updateUnavailability.id,
      },
      {
        dateStart: updateUnavailability.dateStart,
        dateEnd: updateUnavailability.dateEnd,
      },
    );
  }

  async getUnavailability(
    id: string,
    filter: FilterUnavailabilityDto,
  ): Promise<Unavailability[]> {
    const adventurer = await this.adventurerModel
      .findById(id)
      .populate('unavailabilities')
      .exec();

    await Promise.all(
      adventurer.unavailabilities.map(async (unavailability, index) => {
        adventurer.unavailabilities[index] =
          await this.unavailabilityModel.findById(unavailability);
        if (
          filter.type &&
          adventurer.unavailabilities[index].type &&
          adventurer.unavailabilities[index].type !== filter.type
        ) {
          adventurer.unavailabilities.splice(index, 1);
        }
      }),
    );

    return adventurer.unavailabilities;
  }
}
