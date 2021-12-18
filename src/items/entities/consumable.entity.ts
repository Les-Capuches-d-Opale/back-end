import { Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Consumable extends Document {
  @Prop()
  charges: number;

  @Prop()
  usedCharges: number;
}
