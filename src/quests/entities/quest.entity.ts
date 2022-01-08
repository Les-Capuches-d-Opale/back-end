import { Request } from './../../requests/entities/request.entity';
import { Transaction } from './../../transactions/entities/transaction.entity';
import { Adventurer } from './../../adventurers/entities/adventurer.entity';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { timestamp } from 'rxjs';

@Schema()
export class Quest extends Document {
  @ApiProperty({
    description: 'The quest associated to the request.',
    example: '61bf9b9b0be9cf45263b6f2d',
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Request',
  })
  request: Request;

  @ApiProperty({
    description: 'The list of adventurers that are part of the quest.',
    example: '61bf9b9b0be9cf45263b6f2d',
  })
  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Adventurer',
      required: false,
    },
  ])
  groups: Adventurer[];

  @ApiProperty({
    description: 'The transaction of the quest.',
    example: '61bf9b9b0be9cf45263b6f44',
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Transaction',
  })
  payment: Transaction;

  @Prop() createdAt?: Date
  @Prop() updatedAt?: Date
}

export const QuestSchema = SchemaFactory.createForClass(Quest);
