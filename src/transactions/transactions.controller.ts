import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/')
  getAll(): Promise<Transaction[]> {
    return this.transactionsService.findAll();
  }
}
