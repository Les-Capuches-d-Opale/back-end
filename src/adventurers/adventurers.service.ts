import { CreateAventurerDto } from './dto/createAventurer.dto';
import { UpdateExpAdventurerDto } from './dto/updateExpAdventurer.dto';
import { Adventurer } from './entities/adventurer.entity';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class AdventurersService {
  constructor(
    @InjectModel(Adventurer.name)
    private readonly adventurerModel: Model<Adventurer>,
  ) {}

  async findAll(): Promise<Adventurer[]> {
    return await this.adventurerModel.find({}).populate('speciality').exec();
  }

  async findOne(id: string): Promise<Adventurer> {
    return await this.adventurerModel
      .findById(id)
      .populate('speciality')
      .exec();
  }

  create(createAventurerDto: CreateAventurerDto): Promise<Adventurer> {
    const adventurer = new this.adventurerModel(createAventurerDto);
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
