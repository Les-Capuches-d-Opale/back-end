import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @ApiProperty({
    description: 'The amount of the transaction.',
    example: 4000.6,
  })
  @IsNumber()
  readonly amount: number;

  @ApiProperty({
    description: 'The type of the transaction.',
    example: 'AdventurerPayment',
  })
  @IsString()
  readonly type: string;
}
