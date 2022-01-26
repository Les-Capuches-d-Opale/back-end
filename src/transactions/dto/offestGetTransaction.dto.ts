import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OffsetGetTransaction {
  @ApiProperty({
    description: '',
    example: '7',
  })
  @IsNumber()
  readonly offset?: number;
}