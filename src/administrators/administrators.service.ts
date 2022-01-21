import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model, Types } from 'mongoose';
import { FilterItemQueryDto } from 'src/items/dto/filterItemQuery.dto';
import { Item } from 'src/items/entities/item.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { UpdateAdministratorDto } from './dto/updateAdministrator.dto';
import { Administrator } from './entities/administrator.entity';
const mongoose = require('mongoose');

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectModel(Administrator.name)
    private readonly administratorModel: Model<Administrator>,
  ) { }

  async findOne(email: string): Promise<Administrator> {
    return await this.administratorModel.findOne({ email }).exec();
  }

  async getItems(id: string, filter: FilterItemQueryDto): Promise<Administrator> {
    const admin = await this.administratorModel.findById(id).populate('items').exec()
    console.log(admin)
    return admin
    //return admin
  }

  async getOne(id: string): Promise<Administrator> {
    return await this.administratorModel.findById(id).populate('items').exec();
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
    items: {
      quantity: number;
      price: number;
      id: string;
    }[],
    transaction: Transaction,
    session: ClientSession,
  ): Promise<Administrator> {
    const administrator = await this.administratorModel
      .findById(new Types.ObjectId(id))
      .exec();

    const amount: number = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    if (administrator.wallet < amount)
      throw new HttpException('Not enough money', 400);

    return await this.administratorModel
      .findOneAndUpdate(
        { _id: id },
        {
          $push: {
            items: items.map((item) => item.id),
            payments: transaction._id,
          },
          $inc: { wallet: -amount },
        },
        { new: true },
      )
      .session(session)
      .exec();
  }

  async addBounty(id: string, bounty: number) {
    return await this.administratorModel.findByIdAndUpdate(
      id,
      { $inc: { wallet: bounty } },
      { new: true },
    );
  }
}
