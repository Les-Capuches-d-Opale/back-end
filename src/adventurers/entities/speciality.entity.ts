import { Item } from 'src/items/entities/item.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
@Schema()
export class Speciality extends Document {
  @ApiProperty({
    description: 'The name of the speciality.',
    example: 'Archer',
  })
  @Prop()
  name: string;

  @ApiProperty({
    description: 'The description of the speciality.',
    example: 'The archer uses his bow to shoot enemies with great precision.',
  })
  @Prop()
  description: string;

  @ApiProperty({
    description: 'The list of items of the speciality.',
  })
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
