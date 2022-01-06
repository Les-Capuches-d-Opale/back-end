import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Schema as MongooseSchema } from 'mongoose';

export enum TransactionType {
  'QuestBounty',
  'AdventurerPayment',
  'Purchase',
  'Tax',
}

export class Transaction extends Document {
  @ApiProperty({
    description: 'The amount of money that is transfered by quest.',
    example: '10',
  })
  @Prop()
  amount: number;

  @ApiProperty({
    description: 'The transaction type.',
    example: 'QuestBounty',
  })
  @Prop({ enum: TransactionType })
  type: TransactionType;

  @ApiProperty({
    description: 'The date of the transaction.',
    example: '2020-06-01T00:00:00.000Z',
  })
  @Prop()
  data: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
