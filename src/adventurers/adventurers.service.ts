import { QuestsService } from './../quests/quests.service';
import { CreateAdventurerDto } from './dto/createAdventurer.dto';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
import { Adventurer } from './entities/adventurer.entity';
import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FilterAdventurerQueryDto } from './dto/filterAdventurerQuery.dto';
import { Speciality } from './entities/speciality.entity';
@Injectable()
export class AdventurersService {
  constructor(
    @InjectModel(Adventurer.name)
    private readonly adventurerModel: Model<Adventurer>,
    @InjectModel(Speciality.name)
    private readonly specialityModel: Model<Speciality>,
    private readonly questsService: QuestsService,
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
      .where(speciality ? { speciality: speciality } : {})
      .populate('speciality')
      .lean()
      .exec();

    const quests = await this.questsService.findAll();

    adventurers.forEach((adventurer) => {
      const adventurerHasQuests = quests.filter((quest) => {
        const adventurersId = quest.groups.map((questAdventurer) =>
          questAdventurer._id.toString(),
        );
        return adventurersId.includes(adventurer._id.toString());
      });

      if (!adventurerHasQuests.length)
        return (adventurer['isAvailableNow'] = true);

      adventurerHasQuests.forEach((adventurerQuest) => {
        const startDateQuest = new Date(adventurerQuest.request.dateDebut);
        const endDateQuest = new Date(
          adventurerQuest.request.dateDebut.setSeconds(
            adventurerQuest.request.dateDebut.getSeconds() +
              adventurerQuest.request.duration,
          ),
        );

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

  create(createAdventurerDto: CreateAdventurerDto): Promise<Adventurer> {
    const baseDailyRate = (
      createAdventurerDto.baseDailyRate * 1 +
      0.5 * Math.log(createAdventurerDto.experience)
    ).toFixed(2);

    const adventurer = new this.adventurerModel({
      ...createAdventurerDto,
      baseDailyRate,
    });
    return adventurer.save();
  }

  async updateExp(
    id: string,
    updateExpAdventurerDto: UpdateExpAdventurerDto,
  ): Promise<Adventurer> {
    return await this.adventurerModel.findByIdAndUpdate(
      id,
      { $inc: { experience: updateExpAdventurerDto.experience } },
      { new: true },
    );
  }

  async updateAmount(
    id: string,
    // updateAmountAdventurerDto: UpdateAmountAdventurerDto,
  ): Promise<Adventurer> {
    return await this.adventurerModel.findByIdAndUpdate(
      id,
      { $inc: { experience: /* updateAmountAdventurerDto.amount  */ 1} },
      { new: true },
    );

  async getAllSpecialities(): Promise<Speciality[]> {
    return await this.specialityModel.find({}).exec();
  }
}
