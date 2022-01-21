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

  async getMore() {
    const type = 'QuestBounty';
    const transactions = await this.transactionModel
      .find({type: { $regex: type, $options: 'i' },})
      .where({})
      .exec();
     
      return this.calculateAmountTransaction(transactions);
  }

  async getLess(): Promise<Transaction[] | any> {
    const type1 = 'Tax';
    const type2 = 'Purchase';
    const transactions = await this.transactionModel
      .find({
        $or: [
          {type: { $regex: type1, $options: 'i' }},
          {type: { $regex: type2, $options: 'i' }}
      ]})
      .where({})
      .exec();
     
      return this.calculateAmountTransaction(transactions);
  }
 
 calculateAmountTransaction = (transactions: any) => {
    let result = [];
    let amount = 0;
    let date = undefined;
    let index = 0;
    transactions.map(element => {
      date = element.date.toLocaleDateString('fr-FR');
      amount = element.amount;
      index = result.findIndex(x => x.date === date);
      if (index === -1) {
        result.push({date: date, amount: amount});
       } else {
        result[index] = {date: date, amount: result[index].amount + amount};
      }
    });
    return result;
  }

}