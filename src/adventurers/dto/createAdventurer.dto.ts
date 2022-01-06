import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAdventurerDto {
  @ApiProperty({
    description: 'The name of the adventurer.',
    example: 'Batman',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The speciality (_id) of the adventurer.',
    example: 'af4c245e1d8a4f8a9d7e8c7f',
  })
  @IsString()
  readonly speciality: string;

  @ApiProperty({
    description: 'The amount of experience of the adventurer.',
    example: 23.08,
  })
  @IsNumber()
  readonly experience: number;

  @ApiProperty({
    description: 'The daily base rate of the adventurer.',
    example: 1.2,
  })
  @IsNumber()
  readonly baseDailyRate: number;

  @IsOptional()
  @ApiProperty({
    description: "The picture's url of the adventurer.",
    example:
      'https://img.huffingtonpost.com/asset/5e2ee34f240000e5020b501f.jpeg?cache=66hH6JXnKE&ops=crop_26_306_1973_1528,scalefit_630_noupscale',
  })
  @IsString()
  readonly pictureURL?: string;
}
