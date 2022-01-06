import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateExpAdventurerDto {
  @ApiProperty({
    description: 'The amount of experience of the adventurer to be increment.',
    example: 0.24,
  })
  @IsNumber()
  readonly experience: number;
}
