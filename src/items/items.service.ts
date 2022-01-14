import { TransactionsService } from './../transactions/transactions.service';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { Item } from './entities/item.entity';
import { FilterItemQueryDto } from './dto/filterItemQuery.dto';
import { TransactionType } from 'src/transactions/entities/transaction.entity';

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
    const { limit, offset, type } = filterItemQueryDto;
    return await this.itemModel
      .find()
      .where(type ? { type } : {})
      .skip(offset)
      .limit(limit)
      .exec();
  }

  async buyOne(id: string, adminId: string): Promise<Item> {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      const item = await this.itemModel.findById(id).session(session).exec();

      if (!item) throw new NotFoundException('Item not found');

      const transaction = await this.transactionService.create({
        amount: item.price,
        type: TransactionType.Purchase,
      });

      await this.administratorService.addItem(adminId, item, transaction);

      await item.save({ session });
      await session.commitTransaction();

      return item;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }
  }
}
