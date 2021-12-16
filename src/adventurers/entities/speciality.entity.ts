import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Speciality extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
