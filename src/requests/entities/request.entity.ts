import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { AdventurerProfile } from './adventurerProfile.entity';

export enum QuestStatus {
  Rejected = 'Rejected',
  Succeeded = 'Succeeded',
  Failed = 'Failed',
  Pending = 'Pending',
  Unassigned = 'Unassigned',
}
@Schema()
export class Request extends Document {
  @ApiProperty({
    description: 'The name of the request.',
    example: 'Go to the forest',
    required: true,
  })
  @Prop()
  name: string;

  @ApiProperty({
    description: 'The description of the request.',
    example: 'I need more 500 stacks of oak wood to build a table',
    required: true,
  })
  @Prop()
  description: string;

  @ApiProperty({
    description: 'The profil picture of the quest giver.',
    required: true,
  })
  @Prop()
  pictureUrl: string;

  @ApiProperty({
    description: 'The name of the quest giver.',
    required: true,
  })
  @Prop()
  questGiver: string;

  @ApiProperty({
    description: 'The bounty of the request.',
    example: '5000',
    required: true,
  })
  @Prop()
  bounty: number;

  @ApiProperty({
    description: 'The duration of the request in second.',
    example: '60000',
    required: true,
  })
  @Prop()
  duration: number;

  @ApiProperty({
    description: 'the list of profiles required to succeed in the request.',
    required: true,
  })
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'AdventurerProfile',
    required: true,
  })
  requiredProfiles: AdventurerProfile[];

  @ApiProperty({
    description: 'How many experience they gonna win.',
    required: true,
  })
  @Prop()
  awardedExperience: number;

  @Prop()
  status: QuestStatus;

  @ApiProperty({
    description: 'The date when the request will start.',
    example: '20/10/2021',
    required: true,
  })
  @Prop()
  dateDebut: Date;
}

export const RequestSchema = SchemaFactory.createForClass(Request);
