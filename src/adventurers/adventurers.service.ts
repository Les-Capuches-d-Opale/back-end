import { Speciality } from './entities/speciality.entity';
import { CreateAdventurerDto } from './dto/createAdventurer.dto';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
import { Adventurer } from './entities/adventurer.entity';
import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FilterAdventurerQueryDto } from './dto/filterAdventurerQuery.dto';
@Injectable()
export class AdventurersService {
  constructor(
    @InjectModel(Adventurer.name)
    private readonly adventurerModel: Model<Adventurer>,
  ) {}

  async findAll(
    filterAdventurerQueryDto: FilterAdventurerQueryDto,
  ): Promise<Adventurer[]> {
    const { exactLevel, minLevel, name, speciality, isAvailableNow } =
      filterAdventurerQueryDto;

    if (exactLevel && minLevel) {
      throw new HttpException('You can only use level or minLevel', 400);
    }

    if (isAvailableNow) {
    }

    return await this.adventurerModel
      .find({
        name: { $regex: name ? name : '', $options: 'i' },
        experience: {
          $gte: Math.floor(exactLevel) || Math.floor(minLevel) || 0,
          $lte: exactLevel ? Math.floor(exactLevel) + 0.99 : 1000000,
        },
      })
      .where(speciality ? { speciality: speciality } : {})
      .populate('speciality')
      .exec();
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
}
