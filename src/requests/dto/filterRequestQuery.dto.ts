import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { QuestStatus } from '../entities/request.entity';

export class FilterRequestQueryDto extends PaginationQueryDto {
  @IsOptional()
  @ApiProperty({
    description: 'The name of the request.',
    example: 'La quête de Dieu',
  })
  @IsString()
  readonly name?: string;

  @IsOptional()
  @ApiProperty({
    description: 'The giver of the request.',
    example: 'Le prètre',
  })
  @IsString()
  readonly questGiver?: string;

  @IsOptional()
  @ApiProperty({
    description: 'How many experience they gonna win.',
    example: 20,
  })
  @Min(0)
  readonly awardedExperience?: number;

  @IsOptional()
  @ApiProperty({
    description: 'Value min of bounty for the request.',
    example: 5000,
  })
  @Min(0)
  readonly bountyMin?: number;

  @IsOptional()
  @ApiProperty({
    description: 'Value max of bounty for the request.',
    example: 5000,
  })
  @Min(0)
  readonly bountyMax?: number;

  @IsOptional()
  @ApiProperty({
    description: 'The end date of the request.',
    example: '2021-12-23',
  })
  @IsDate()
  readonly dateFin?: Date;
}
