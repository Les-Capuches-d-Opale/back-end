import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SetStatusQuestDto {
    @ApiProperty({
        description: 'The ID of the request.',
        example: '9cabe64dcf0d4447fa60f5e2',
    })
    @IsString()
    readonly request: string;

    @ApiProperty({
        description: "The status to change",
        example: "Successed"
    })
    @IsString()
    readonly status: string;
}
