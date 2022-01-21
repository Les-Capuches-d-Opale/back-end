import { Item } from './../entities/item.entity';
import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class BuyItemDto {
  @ApiProperty({
    description: 'The list of items (_id) and quantity to buy.',
    example: [
      { quantity: 1, itemId: '5cabe64dcf0d4447fa6e0000' },
      { quantity: 2, itemId: '5cabe64dcf0d4447fa6e0001' },
    ],
  })
  @IsArray()
  readonly cart: { quantity: number; itemId: string }[];
}
