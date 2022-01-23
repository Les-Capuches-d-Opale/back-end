import { Speciality } from '../entities/speciality.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Item } from 'src/items/entities/item.entity';

export enum StatusItem {
  OK = 'Equipped',
  BROKEN = 'Broken',
  REPAIRING = 'Repairing',
}

class AdventurerItem {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Item',
    required: true,
  })
  item: Item;

  @Prop()
  daysInUse?: number;

  @Prop()
  usedCharges?: number;

  @Prop()
  repairAt?: Date;

  @Prop({ enum: StatusItem })
  status: StatusItem;
}

class dayOffAdventurer {
  @Prop()
  dateDebut: Date;

  @Prop()
  dateFin: Date;
}

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
  @Prop({ default: 0 })
  experience: number;

  @ApiProperty({
    description: 'The daily base rate of the adventurer.',
    example: 1.2,
  })
  @Prop({ index: true })
  baseDailyRate: number;

  @ApiProperty({
    description: 'The amout of the adventurer.',
    example: 1.2,
  })
  @Prop({ default: 0 })
  amount: number;

  @ApiProperty({
    description: "The picture's url of the adventurer.",
    example:
      'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
  })
  @Prop({ required: false })
  pictureURL: string;

  @ApiProperty({
    description: 'The list of transactions of the adventurer.',
  })
  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'Transaction',
    },
  ])
  payments: Transaction[];

  @ApiProperty({
    description: 'The list of transactions of the adventurer.',
  })
  @Prop([AdventurerItem])
  items: AdventurerItem[];

  @ApiProperty({
    description: 'The days off schedule of the adventurer.',
  })
  @Prop([dayOffAdventurer])
  daysOffAdventurer: dayOffAdventurer[];
}

export const AdventurerSchema = SchemaFactory.createForClass(Adventurer);
