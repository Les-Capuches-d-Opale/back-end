import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, IsString } from 'class-validator';

export class FilterAdventurerQueryDto {
  @IsOptional()
  @ApiProperty({
    description: 'The level of the adventurer.',
    example: 23,
  })
  @IsPositive()
  readonly level?: number;

  @IsOptional()
  @ApiProperty({
    description: 'The name of the adventurer.',
    example: 'Batman',
  })
  @IsString()
  readonly name?: string;

  @IsOptional()
  @ApiProperty({
    description: 'The speciality (_id) of the adventurer.',
    example: 'af4c245e1d8a4f8a9d7e8c7f',
  })
  @IsString()
  readonly speciality?: string;
}
