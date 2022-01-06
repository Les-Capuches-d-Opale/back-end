import { CreateTransactionDto } from './entities/dto/createTransaction.dto';
import { Transaction } from './entities/transaction.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly TransactionModel: Model<Transaction>,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this.TransactionModel.find({}).exec();
  }

  create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    const transaction = new this.TransactionModel({
      ...createTransactionDto,
      date: new Date(),
    });

    return transaction.save();
  }
}
