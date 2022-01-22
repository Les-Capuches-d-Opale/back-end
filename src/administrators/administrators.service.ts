import { TransactionsService } from './../transactions/transactions.service';
import { AdventurersService } from 'src/adventurers/adventurers.service';
import { ItemsService } from './../items/items.service';
import { Adventurer } from 'src/adventurers/entities/adventurer.entity';
import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { ClientSession, Connection, Model, Types } from 'mongoose';
import {
  Transaction,
  TransactionType,
} from 'src/transactions/entities/transaction.entity';
import { UpdateAdministratorDto } from './dto/updateAdministrator.dto';
import { Administrator } from './entities/administrator.entity';
const mongoose = require('mongoose');

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectModel(Administrator.name)
    private readonly administratorModel: Model<Administrator>,
    @Inject(forwardRef(() => ItemsService))
    private readonly itemsService: ItemsService,
    @Inject(forwardRef(() => AdventurersService))
    private readonly adventurersService: AdventurersService,
    @Inject(forwardRef(() => TransactionsService))
    private readonly transactionsService: TransactionsService,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async findOne(email: string): Promise<Administrator> {
    return await this.administratorModel.findOne({ email }).exec();
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
            items: items.flatMap((item) =>
              Array.from({ length: item.quantity }).fill(item.id),
            ),
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

  async buyAllRequiredItems(adminId: string, groups: Adventurer[]) {
    const administrator = await this.administratorModel
      .findById(new Types.ObjectId(adminId))
      .exec();

    await Promise.all(
      groups.map(async (adventurer) => {
        const itemsRequired = await this.itemsService.getAllById(
          adventurer.speciality.requiredItems.map((item) => item._id),
        );

        const amountOfAllItem = itemsRequired.reduce((acc, item) => {
          if (!adventurer.items.includes(item._id)) {
            return acc + item.price;
          }
          return acc;
        }, 0);

        if (amountOfAllItem > administrator.wallet || amountOfAllItem === 0)
          return;

        const session = await this.connection.startSession();
        session.startTransaction();

        try {
          const itemSaved = await this.adventurersService.addItem(
            adventurer._id,
            itemsRequired,
            session,
          );

          await this.administratorModel.findByIdAndUpdate(
            adminId,
            {
              $inc: { wallet: -amountOfAllItem },
            },
            { new: true },
          );

          await this.transactionsService.create(
            {
              amount: amountOfAllItem,
              type: TransactionType.Purchase,
            },
            session,
          );

          await itemSaved.save({ session });
          await session.commitTransaction();
        } catch (err) {
          await session.abortTransaction();
          throw err;
        } finally {
          session.endSession();
        }
      }),
    );
  }
}
