import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Consumable extends Document {
  @ApiProperty({
    description: 'The charges of the consumable.',
    example: 10,
  })
  @Prop()
  charges: number;

  @ApiProperty({
    description: 'The number of used charges of the consumable.',
    example: 2,
  })
  @Prop()
  usedCharges: number;
}
