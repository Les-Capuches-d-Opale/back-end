import { Consumable } from './consumable.entity';
import { Equipment } from './equipment.entity';
import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
    description: 'The availability of the item.',
    default: true,
    example: true,
  })
  @Prop()
  isAvailable: boolean;

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
