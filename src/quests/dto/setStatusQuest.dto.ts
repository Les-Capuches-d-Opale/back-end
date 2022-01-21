import { QuestStatus } from './../../requests/entities/request.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SetStatusQuestDto {
    @ApiProperty({
        description: "The status to change",
        example: "Successed"
    })
    @IsString()
    readonly status: QuestStatus;
}
