import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class CreateQuestDto {
    @ApiProperty({
        description: 'The ID of the request.',
        example: '9cabe64dcf0d4447fa60f5e2',
    })
    @IsString()
    readonly request: string;

    @ApiProperty({
        description: 'The list of ID of adventurers.',
        example: ['7cabe64dcf0d4447fa60f5e4', '7cabe64dcf0d4447fa60f5e3'],
    })
    @IsArray()
    readonly groups: string[]
}
