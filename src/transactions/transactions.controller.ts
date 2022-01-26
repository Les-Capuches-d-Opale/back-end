import { Controller, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TransactionsService } from './../transactions/transactions.service';
import { OffsetGetTransaction } from './dto/offestGetTransaction.dto';
import { Transaction } from './entities/transaction.entity';

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }
  
  @Get('/groups')
  getGroupTransaction(@Query() offset: OffsetGetTransaction): Promise<Transaction[]> {
    return this.transactionsService.getGroupTransaction(offset);
  }
  
  @Get('/')
  getTransaction(): Promise<Transaction[]> {
    return  this.transactionsService.getTransaction();
  }
}
