import { QuestsService } from './../quests/quests.service';
import { CreateTransactionDto } from './entities/dto/createTransaction.dto';
import { Transaction } from './entities/transaction.entity';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, Model } from 'mongoose';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this.transactionModel.find({}).exec();
  }

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = new this.transactionModel({
      ...createTransactionDto,
      date: new Date(),
    });

    return transaction.save();
  }
}
