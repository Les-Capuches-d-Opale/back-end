import { IsOptional, IsPositive, IsString } from 'class-validator';

export class FilterAdventurerQueryDto {
  @IsOptional()
  @IsPositive()
  readonly level?: number;

  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly speciality?: string;
}
