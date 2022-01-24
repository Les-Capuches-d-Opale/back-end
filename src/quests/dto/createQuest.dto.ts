import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { RequiredProfilDto } from './requiredProfile.dto';

export class CreateQuestDto {
  @ApiProperty({
    description: 'The ID of the request.',
    example: '9cabe64dcf0d4447fa60f5e4',
  })
  @IsString()
  readonly request: string;

  @ApiProperty({
    description: 'The list of ID of adventurers.',
    example: [
      {
        reqProfile: {
          id: '5cabe64dcf0d4447fa60f5e8',
          experience: 0,
        },
        adventurer: '7cabe64dcf0d4447fa60f5e4',
      },
      {
        reqProfile: {
          id: '5cabe64dcf0d4447fa60f5e4',
          experience: 5,
        },
        adventurer: '7cabe64dcf0d4447fa60f5e2',
      },
      {
        reqProfile: {
          id: '5cabe64dcf0d4447fa60f5e6',
          experience: 3,
        },
        adventurer: '5cabe64dcf0d4447fa60f5f0',
      },
      {
        reqProfile: {
          id: '5cabe64dcf0d4447fa60f5e9',
          experience: 4,
        },
        adventurer: '5cabe64dcf0d4447fa60f5f1',
      },
    ],
  })
  @IsArray()
  readonly groups: RequiredProfilDto[];
}
