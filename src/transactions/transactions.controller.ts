import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TransactionsService } from './../transactions/transactions.service';
import { FilterTransactionQueryDto } from './entities/dto/filterTransaction.dto';
import { Transaction } from './entities/transaction.entity';

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

  @Get('/dashboard')
  getDashboardData(@Request() req) {
    return this.transactionsService.getDashboardData(req.user.adminId);
  }
}
