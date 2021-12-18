import { Consumable } from './consumable.entity';
import { Equipment } from './equipment.entity';
import { IntersectionType, PartialType } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Item extends PartialType(IntersectionType(Equipment, Consumable)) {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop({
    type: String,
    validate: (value: string) => {
      return value === 'consumable' || value === 'equipment';
    },
  })
  type: 'consumable' | 'equipment';
}

export const ItemSchema = SchemaFactory.createForClass(Item);
