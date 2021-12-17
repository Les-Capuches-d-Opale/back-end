import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAventurerDto {
  @ApiProperty({
    description: 'The name of the adventurer.',
    example: 'Batman',
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'The speciality of the adventurer.',
    example: 'abc39bTy7',
  })
  @IsString()
  readonly speciality: string;

  @ApiProperty({
    description: 'The amount of experience of the adventurer.',
    example: '23.08',
  })
  @IsNumber()
  readonly experience: number;

  @ApiProperty({
    description: 'The basic daily rate of the adventurer.',
    example: '1.2',
  })
  @IsNumber()
  readonly baseDailyRate: number;

  @ApiProperty({
    description: "The picture's URL of the adventurer.",
    example:
      'https://th.bing.com/th/id/OIP.skI52vFZVywYGIkBf9mH0gHaHa?pid=ImgDet&rs=1',
    required: false,
  })
  @IsString()
  readonly pictureURL?: string;
}
