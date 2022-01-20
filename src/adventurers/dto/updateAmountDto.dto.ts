import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateAmountAdventurerDto {
  @ApiProperty({
    description: 'The amount of the adventurer to be increment.',
    example: 0.24,
  })
  @IsNumber()
  readonly amount: number;
}
