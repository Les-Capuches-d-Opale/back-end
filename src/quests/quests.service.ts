import { Quest } from './entities/quest.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class QuestsService {
  constructor(
    @InjectModel(Quest.name)
    private readonly questModel: Model<Quest>,
  ) {}

  async findAll(): Promise<Quest[]> {
    return await this.questModel.find({}).exec();
  }
}
