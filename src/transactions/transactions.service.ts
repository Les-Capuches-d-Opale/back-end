import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/createTransaction.dto';
import { FilterTransactionQueryDto } from './entities/dto/filterTransaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this.transactionModel.find({}).exec();
  }

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const transaction = await this.transactionModel.create({
      ...createTransactionDto,
      date: new Date(),
    });

    return transaction.save();
  }

  async filterAll(
    filterTransactionQueryDto: FilterTransactionQueryDto,
  ): Promise<Transaction[] | any> {
    const { transactionType } = filterTransactionQueryDto;
    const transactions = await this.transactionModel
      .find()
      .where(transactionType ? { type: transactionType } : {})
      .exec();

    return transactions;
  }
}
