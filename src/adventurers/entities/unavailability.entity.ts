import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { UnavailabilityType } from './adventurer.entity';

@Schema()
export class Unavailability extends Document{
  @Prop()
  @ApiProperty({
    description: 'If type is request the requestId if define',
    example: '9cabe64dcf0d4447fa60f5e1',
  })
  requestId?: string;

  @Prop()
  @ApiProperty({
    description: 'The type of the indisponibility',
    example: 'DayOf',
  })
  type: UnavailabilityType;

  @Prop()
  @ApiProperty({
    description: 'This is the date where the indisponibility start',
    example: '',
  })
  dateStart: string;

  @Prop()
  @ApiProperty({
    description: 'This is the date where the indisponibility finish',
    example: '',
  })
  dateEnd: string;
}

export const UnavailabilitySchema =
  SchemaFactory.createForClass(Unavailability);
