import { Item } from 'src/items/entities/item.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
@Schema()
export class Speciality extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
  ])
  requiredItems: Item[];
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
