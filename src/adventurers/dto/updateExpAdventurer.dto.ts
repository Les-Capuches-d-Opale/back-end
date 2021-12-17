import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateExpAdventurerDto {
  @ApiProperty({
    description: 'The amount of experience of the adventurer.',
    example: '23.08',
  })
  @IsNumber()
  readonly experience: number;
}
