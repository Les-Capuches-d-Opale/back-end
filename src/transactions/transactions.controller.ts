import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterTransactionQueryDto } from './entities/dto/filterTransaction.dto';

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get('/')
  filterAll(
    @Query() filterTransactionQueryDto: FilterTransactionQueryDto,
  ): Promise<Transaction[]> {
    return this.transactionsService.filterAll(filterTransactionQueryDto);
  }

  @Get('/:date')
  filter(@Param('date') date: number): Promise<Transaction[]> {
    return this.transactionsService.filterByDate(date);
  }
}
