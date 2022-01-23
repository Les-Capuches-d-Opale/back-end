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
  Accepted = 'Accepted',
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
    description: 'The date end of the request.',
    example: '2021-12-23',
    required: true,
  })
  @Prop()
  dateFin: Date;

  @ApiProperty({
    description: 'the list of profiles required to succeed in the request.',
    example: '61bf9b9b0be4cf45263b6f2d',
  })
  @Prop()
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
    example: '2021-12-01',
    required: true,
  })
  @Prop()
  dateDebut: Date;

  @Prop() createdAt?: Date;
  @Prop() updatedAt?: Date;
}

export const RequestSchema = SchemaFactory.createForClass(Request);
