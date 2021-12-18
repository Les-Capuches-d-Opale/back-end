import { Speciality } from '../entities/speciality.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Adventurer extends Document {
  @Prop()
  @ApiProperty({
    description: 'The name of the adventurer.',
    example: 'Batman',
  })
  name: string;

  @ApiProperty({
    description: 'The speciality of the adventurer.',
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Speciality',
    required: true,
  })
  speciality: Speciality;

  @ApiProperty({
    description: 'The amount of experience of the adventurer.',
    example: 23.08,
  })
  @Prop()
  experience: number;

  @ApiProperty({
    description: 'The daily base rate of the adventurer.',
    example: 1.2,
  })
  @Prop({ index: true })
  baseDailyRate: number;

  @ApiProperty({
    description: "The picture's url of the adventurer.",
    example:
      'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
  })
  @Prop({ required: false })
  pictureURL: string;
}

export const AdventurerSchema = SchemaFactory.createForClass(Adventurer);
