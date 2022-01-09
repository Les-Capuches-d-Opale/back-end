import { Transaction } from './../../transactions/entities/transaction.entity';
import { Consumable } from './consumable.entity';
import { Equipment } from './equipment.entity';
import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Item extends PartialType(IntersectionType(Equipment, Consumable)) {
  @ApiProperty({
    description: 'The name of the item.',
    example: 'Sword',
  })
  @Prop()
  name: string;

  @ApiProperty({
    description: 'The price of the item.',
    example: 16.5,
  })
  @Prop()
  price: number;

  @ApiProperty({
    description: 'The transaction associated to the item.',
    example: '61bf9b9b0be9cf45263b6f2d',
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Transaction',
  })
  request: Transaction;

  @ApiProperty({
    description: 'The type of the item. Can be "equipment" or "consumable".',
    example: 'equipment',
  })
  @Prop({
    type: String,
    validate: (value: string) => {
      return value === 'consumable' || value === 'equipment';
    },
  })
  type: 'consumable' | 'equipment';
}

export const ItemSchema = SchemaFactory.createForClass(Item);
