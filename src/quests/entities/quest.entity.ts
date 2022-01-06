import { Transaction } from './../../transactions/entities/transaction.entity';
import { Adventurer } from './../../adventurers/entities/adventurer.entity';
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class Quest extends Document {
  @ApiProperty({
    description: 'The list of adventurers that are part of the quest.',
    example: '61bf9b9b0be9cf45263b6f2d',
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Adventurer',
  })
  group: Adventurer[];

  @ApiProperty({
    description: 'The transaction of the quest.',
    example: '61bf9b9b0be9cf45263b6f44',
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Transaction',
  })
  payment: Transaction;
}

export const QuestSchema = SchemaFactory.createForClass(Quest);

function ApiTags(arg0: string) {
  throw new Error('Function not implemented.');
}

function Controller(arg0: string) {
  throw new Error('Function not implemented.');
}
