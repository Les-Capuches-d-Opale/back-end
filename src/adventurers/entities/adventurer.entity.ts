import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Adventurer extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Speciality',
    required: true,
  })
  speciality: string;

  @Prop()
  baseDailyRate: number;

  @Prop({ required: false })
  pictureURL: string;
}

export const AdventurerSchema = SchemaFactory.createForClass(Adventurer);
