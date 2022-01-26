import { Transaction } from './entities/transaction.entity';
import { TransactionsService } from './../transactions/transactions.service';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterTransactionQueryDto } from './entities/dto/filterTransaction.dto';

@ApiBearerAuth()
@ApiTags('transactions')
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }
  
  // ROUTE POUR GROUPER LES TRANSACTIONS
  @Get('/groups')
  getGroupTransaction(): Promise<Transaction[]> {
    return this.transactionsService.getGroupTransaction();
  }
  
  //CREER LA ROUTE POUR CHAQUE TRANSACTIONS SUR LES 7 DERNIERS JOURS
  @Get('/')
  getTransaction(): Promise<Transaction[]> {
    return null
  }
}
