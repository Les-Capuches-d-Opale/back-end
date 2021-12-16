import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class Item extends Document {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

@Schema()
export class Equipment extends Item {
  @Prop()
  durability: number;

  @Prop()
  daysInUse: number;

  @Prop()
  repairTime: number;
}

@Schema()
export class Consumable extends Item {
  @Prop()
  charges: number;

  @Prop()
  usedCharges: number;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);
export const ConsumableSchema = SchemaFactory.createForClass(Consumable);
