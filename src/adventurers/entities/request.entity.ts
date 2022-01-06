import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Request extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ required: false })
  pictureUrl: string;

  @Prop({ required: false })
  questGiver: string;
}

export const RequestSchema = SchemaFactory.createForClass(Request);
