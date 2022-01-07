import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsPositive, IsString } from 'class-validator';

export class FilterAdventurerQueryDto {
  @IsOptional()
  @ApiProperty({
    description: 'The level of the adventurer.',
    example: 23,
  })
  @IsPositive()
  readonly exactLevel?: number;

  @IsOptional()
  @ApiProperty({
    description: 'The minimum level required of the adventurer.',
    example: 20,
  })
  @IsPositive()
  readonly minLevel?: number;

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
