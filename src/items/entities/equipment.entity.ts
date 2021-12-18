import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Equipment extends Document {
  @ApiProperty({
    description: 'The durability of the equipment.',
    example: 10,
  })
  @Prop()
  durability: number;

  @ApiProperty({
    description: 'The days in use of the equipment.',
    example: 4,
  })
  @Prop()
  daysInUse: number;

  @ApiProperty({
    description: 'The repair time in day(s) of the equipment.',
    example: 1.5,
  })
  @Prop()
  repairTime: number;
}
