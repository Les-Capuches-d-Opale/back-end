import { RequestsService } from './../requests/requests.service';
import { Quest } from './entities/quest.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
import { Request } from 'src/requests/entities/request.entity';
const mongoose = require('mongoose');


@Injectable()
export class QuestsService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
    private readonly requestService: RequestsService
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

  async createQuest(createQuestDto: CreateQuestDto): Promise<Quest>  {
    const{request, groups} = createQuestDto
     const quest = new this.questModel({
      request: new mongoose.Types.ObjectId(request),
      groups: groups,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return quest.save({timestamps: true})
  }

  async setStatus(setStatusQuest: SetStatusQuestDto): Promise<UpdateWriteOpResult> {
    const {request, status} = setStatusQuest
    return this.requestService.setStatusByID(request, status)
  }
}
