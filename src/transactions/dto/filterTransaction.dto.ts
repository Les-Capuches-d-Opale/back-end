import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { TransactionType } from '../entities/transaction.entity';

export class FilterTransactionQueryDto {
  @IsOptional()
  @ApiProperty({
    description: 'The type of transaction.',
    example: 'QuestBounty',
  })
  @IsString()
  readonly transactionType?: TransactionType;
}