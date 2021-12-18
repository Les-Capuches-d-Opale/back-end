import { Prop, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Equipment extends Document {
  @Prop()
  durability: number;

  @Prop()
  daysInUse: number;

  @Prop()
  repairTime: number;
}
