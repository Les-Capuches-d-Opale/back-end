import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Equipment, Consumable } from '../../items/entities/item.entity';
@Schema()
export class Speciality extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  requiredItems: Equipment[] | Consumable;
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
