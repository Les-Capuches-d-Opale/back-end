import { Quest } from './entities/quest.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuestDto } from './dto/createQuest.dto';
const mongoose = require('mongoose');


@Injectable()
export class QuestsService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
  ) { }

  async findAll(): Promise<Quest[]> {
    return await this.questModel
      .find({})
      .populate('request')
      .populate('groups')
      .exec();
  }

  async findOne(id: string): Promise<Quest> {
    return await this.questModel
      .findById(id)
      .populate('request')
      .populate('groups')
      .exec();
  }

  async createQuest(createAdventurerDto: CreateQuestDto): Promise<Quest>  {
    const{request, groups} = createAdventurerDto
     const quest = new this.questModel({
      request: new mongoose.Types.ObjectId(request),
      groups: groups,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return quest.save({timestamps: true})
  }
}
