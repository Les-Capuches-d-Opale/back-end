import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { Controller, Get, Query } from '@nestjs/common';
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

  @Get('/more')
  getMore(){
    return this.transactionsService.getMore();
  }

  @Get('/less')
  getLess(){
    return this.transactionsService.getLess();
  }
}