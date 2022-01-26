import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { format, sub } from 'date-fns';
import { ClientSession, Model } from 'mongoose';
import { CreateTransactionDto } from './dto/createTransaction.dto';
import { OffsetGetTransaction } from './dto/offestGetTransaction.dto';
//import { FilterTransactionQueryDto } from './entities/dto/filterTransaction.dto';
import { Transaction, TransactionType } from './entities/transaction.entity';

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
    session: ClientSession,
  ): Promise<Transaction | any> {
    const transaction = await this.transactionModel.create(
      [
        {
          ...createTransactionDto,
          date: new Date(),
        },
      ],
      { session },
    );

    return transaction;
  }

  async getGroupTransaction(offset: OffsetGetTransaction): Promise<any> {
    const formatDate = 'yyyy-MM-dd';
    let transactionFinal = [];

    for (let index = 0; index < offset.offset; index++) {
      transactionFinal.push(
        {
          type: TransactionType.QuestBounty,
          amount: 0,
          date: format(sub(new Date(), { days: index }), formatDate),
        },
        {
          type: TransactionType.Tax,
          amount: 0,
          date: format(sub(new Date(), { days: index }), formatDate),
        },
        {
          type: TransactionType.Purchase,
          amount: 0,
          date: format(sub(new Date(), { days: index }), formatDate),
        },
        {
          type: TransactionType.AdventurerPayment,
          amount: 0,
          date: format(sub(new Date(), { days: index }), formatDate),
        },
      );
    }
    const transactions = await this.transactionModel.find().exec();

    let filterByDate = transactions.reduce(function (r, a) {
      r[String(a.date)] = r[String(a.date)] || [];
      r[String(a.date)].push(a);
      return r;
    }, Object.create(null));

    Object.values(filterByDate).map((array) => {
      Object.values(array).map((data) => {
        transactionFinal.map((_data, index) => {
          if (
            _data.type == data.type &&
            _data.date == format(data.date, formatDate)
          ) {
            transactionFinal[index].amount += data.amount;
          }
        });
      });
    });
    return transactionFinal;
  }

  async getTransaction(): Promise<Transaction[]> {
      const transactions = await this.transactionModel
      .find()
      .exec();
    return transactions;
  }
}
