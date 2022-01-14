import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Speciality } from './../../adventurers/entities/speciality.entity';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class AdventurerProfile extends Document {
  @ApiProperty({
    example: '61bf9b9b0be9cf45263b6f2d',
  })
  @Prop(
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Speciality',
      required: true,
    }
  )
  speciality: Speciality;

  @ApiProperty({
    description: 'The experience of the adventurer.',
    required: true,
  })
  @Prop(
    {
      required: true,
    }
  )
  experience: number;
}

export const AdventurerProfileSchema =
  SchemaFactory.createForClass(AdventurerProfile);
