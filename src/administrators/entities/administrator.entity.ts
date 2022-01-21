import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Item } from 'src/items/entities/item.entity';

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

  @ApiProperty({
    description: 'The amount of money of the administrator.',
    example: 625130,
    default: 0,
  })
  @Prop()
  wallet: number;

  @ApiProperty({
    description: 'The items of the administrator.',
    required: false,
  })
  @Prop([
    { 
      type: MongooseSchema.Types.ObjectId, 
      ref: 'Item', 
      required: false 
    }
  ])
  items: Item[];

  @ApiProperty({
    description: 'The list of the transactions of the administrator.',
    required: false,
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Transaction',
    required: false,
  })
  payments: Transaction[];
}

export const AdministratorSchema = SchemaFactory.createForClass(Administrator);
