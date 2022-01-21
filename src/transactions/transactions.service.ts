import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ClientSession } from 'mongoose';
import { CreateTransactionDto } from './dto/createTransaction.dto';
import { FilterTransactionQueryDto } from './dto/filterTransaction.dto';
import { Transaction } from './entities/transaction.entity';
import { AdministratorsService } from 'src/administrators/administrators.service'

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private readonly transactionModel: Model<Transaction>,
    @Inject(forwardRef(() => AdministratorsService))
    private readonly administratorsService: AdministratorsService,
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

  async filterByDate(date: number): Promise<Transaction[] | any> {
    const sinceDate = new Date(
      new Date().setDate(new Date().getDate() - (date || 1)),
    ).toISOString();

    const transactions = await this.transactionModel
      .find()
      .where({ date: { $gte: sinceDate } })
      .exec();

    return transactions;
  }
  
  async getDashboardData(id: string): Promise<Transaction[] | any> {
    const admin = await this.administratorsService.getOne(id)
    const transactions = await this.transactionModel
      .find(
        {
          order: {
            date: "DESC"
          }
        }
      )
      .limit(5)
      .exec();
    const wallet = admin.wallet
    return {wallet, transactions};
  }
}
