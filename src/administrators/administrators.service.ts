import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model, Types } from 'mongoose';
import { Item } from 'src/items/entities/item.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { UpdateAdministratorDto } from './dto/updateAdministrator.dto';
import { Administrator } from './entities/administrator.entity';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectModel(Administrator.name)
    private readonly administratorModel: Model<Administrator>,
  ) {}

  async findOne(email: string): Promise<Administrator> {
    return await this.administratorModel.findOne({ email }).exec();
  }

  async getOne(id: string): Promise<Administrator> {
    const administrator = await this.administratorModel
      .findById(id)
      .populate('items')
      .exec();

    if (!administrator) {
      throw new NotFoundException(`Administrator #${id} not found`);
    }

    return administrator;
  }

  async update(
    id: string,
    updateAdministratorDto: UpdateAdministratorDto,
  ): Promise<Administrator> {
    return await this.administratorModel
      .findOneAndUpdate(
        { _id: id },
        { $set: updateAdministratorDto },
        { new: true },
      )
      .exec();
  }

  async addItem(
    id: string,
    item: Item,
    transaction: Transaction,
  ): Promise<Administrator> {
    const administrator = await this.administratorModel.findById(
      new Types.ObjectId(id),
    );

    if (administrator.wallet < item.price)
      throw new HttpException('Not enough money', 400);

    return await this.administratorModel
      .findOneAndUpdate(
        { _id: id },
        {
          $push: { items: item, payments: transaction },
          $inc: { wallet: -item.price },
        },
        { new: true },
      )
      .exec();
  }

  async addBounty(id: string, bounty: number) {
    return await this.administratorModel.findByIdAndUpdate(
      id,
      { $inc: { wallet: bounty } },
      { new: true },
    )
  }
}
