import { CreateTransactionDto } from './entities/dto/createTransaction.dto';
import { Transaction } from './entities/transaction.entity';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FilterTransactionQueryDto } from './entities/dto/filterTransaction.dto';

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

  async FilterAll(
    filterTransactionQueryDto: FilterTransactionQueryDto,
  ): Promise<Transaction[] | any> {
    const { transactionType } = filterTransactionQueryDto;

    let res = [];
    
    const requests = await this.TransactionModel.find();
    
    if(transactionType){
      res = requests.filter(e => e.type === transactionType);
    }
    
    return res;

  }

}
