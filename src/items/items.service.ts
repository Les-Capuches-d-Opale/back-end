import { BuyItemDto } from './dto/buyItem.dto';
import { TransactionsService } from './../transactions/transactions.service';
import { AdministratorsService } from '../administrators/administrators.service';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { Item } from './entities/item.entity';
import { FilterItemQueryDto } from './dto/filterItemQuery.dto';
import { TransactionType } from 'src/transactions/entities/transaction.entity';
const mongoose = require('mongoose');
@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
    @InjectConnection() private readonly connection: Connection,
    private readonly administratorService: AdministratorsService,
    private readonly transactionService: TransactionsService,
  ) {}

  async findAll(filterItemQueryDto: FilterItemQueryDto): Promise<any> {
    const { limit = 25, offset = 0, type } = filterItemQueryDto;

    const items = await this.itemModel
      .find()
      .where(type ? { type } : {})
      .skip(offset)
      .limit(limit)
      .exec();

    const counts = await this.itemModel.find().count();

    return { items, counts };
  }

  async buyOne(buyItemDto: BuyItemDto, adminId: string): Promise<Item[]> {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      const { cart } = buyItemDto;

      const findQuantity = (id: string) => {
        return cart.find((item) => item.itemId === id.toString());
      };

      const items = await this.itemModel
        .find({
          _id: cart.map((item) => new mongoose.Types.ObjectId(item.itemId)),
        })
        .session(session)
        .exec();

      if (!items.length) throw new NotFoundException('Items nots founds');

      const transaction = await this.transactionService.create(
        {
          amount: items.reduce(
            (acc, item) => acc + item.price * findQuantity(item._id).quantity,
            0,
          ),
          type: TransactionType.Purchase,
        },
        session,
      );

      const itemsQuantity = items.map((item) => ({
        quantity: findQuantity(item._id).quantity,
        price: item.price,
        id: item._id,
      }));

      const itemsSaved = await this.administratorService.addItem(
        adminId,
        itemsQuantity,
        transaction,
        session,
      );

      await itemsSaved.save({ session });
      await session.commitTransaction();

      return items;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }
  }
}
