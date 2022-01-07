import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Speciality } from './../../adventurers/entities/speciality.entity';

@Schema()
export class AdventurerProfile extends Document {
  @ApiProperty({
    required: true,
  })
  @Prop({ ref: 'Speciality', type: MongooseSchema.Types.ObjectId })
  speciality: Speciality;

  @ApiProperty({
    required: true,
  })
  @Prop()
  experience: number;
}

export const AdventurerProfileSchema =
  SchemaFactory.createForClass(AdventurerProfile);
