import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {}

  async findAll(): Promise<Item[]> {
    new this.itemModel({
      name: 'item 1 test',
      price: 4,
      type: 'consumable',
      charges: 1,
      usedCharges: 0,
    }).save();
    return await this.itemModel.find().exec();
  }
}
