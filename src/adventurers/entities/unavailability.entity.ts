import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Request } from 'src/requests/entities/request.entity';
import { UnavailabilityType } from './adventurer.entity';

@Schema()
export class Unavailability extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Request',
    required: false,
  })
  @ApiProperty({
    description: 'If type is request the request if define',
    example: '9cabe64dcf0d4447fa60f5e1',
  })
  request: Request;

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
