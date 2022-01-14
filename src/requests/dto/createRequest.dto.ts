import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsArray, IsString, IsDate } from 'class-validator';
import { AdventurerProfile } from '../entities/adventurerProfile.entity';

export class CreateRequestDto {
  @ApiProperty({
    description: 'The name of the request.',
    example: 'Go to the forest',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The description of the request.',
    example: 'I need more 500 stacks of oak wood to build a table',
  })
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'The profil picture of the quest giver.',
  })
  @IsString()
  readonly pictureUrl: string;

  @ApiProperty({
    description: 'The name of the quest giver.',
  })
  @IsString()
  readonly questGiver: string;

  @ApiProperty({
    description: 'The bounty of the request.',
    example: '5000',
  })
  @IsNumber()
  readonly bounty: number;

  @ApiProperty({
    description: 'The duration of the request in second.',
    example: '60000',
  })
  @IsNumber()
  readonly duration: number;

  @ApiProperty({
    description: 'the list of profiles required to succeed in the request.',
  })
  @IsArray()
  readonly requiredProfiles: AdventurerProfile[]

  @ApiProperty({
    description: 'How many experience they gonna win.',
  })
  @IsNumber()
  readonly awardedExperience: number;

  @ApiProperty({
    description: 'Status.',
  })
  @IsString()
  readonly status: string;

  @ApiProperty({
    description: 'The date when the request will start.',
    example: '2021-11-02',
  })
  @IsDate()
  readonly dateDebut: Date;
}