import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Speciality } from './../../adventurers/entities/speciality.entity';

@Schema()
export class AdventurerProfile extends Document {
  @ApiProperty({
    description: 'The speciality of the adventurer.',
    required: true,
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Speciality',
    required: true,
  })
  speciality: Speciality;

  @ApiProperty({
    description: 'The experience of the adventurer.',
    required: true,
  })
  @Prop()
  experience: number;
}

export const AdventurerProfileSchema =
  SchemaFactory.createForClass(AdventurerProfile);
