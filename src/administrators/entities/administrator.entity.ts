import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Administrator extends Document {
  @ApiProperty({
    description: 'The username of the administrator.',
    example: 'Game Master',
  })
  @Prop()
  username: string;

  @ApiProperty({
    description: 'The email of the administrator.',
    example: 'kirby64@hotmail.com',
  })
  @Prop({ unique: true })
  email: string;

  @ApiProperty({
    description: 'The password of the administrator.',
    example: 'password-123',
  })
  @Prop()
  password: string;
}

export const AdministratorSchema = SchemaFactory.createForClass(Administrator);
