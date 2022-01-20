import { QuestStatus } from './../entities/request.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SetStatusRequestDto {    
    @ApiProperty({
        description: "The status to change",
        example: "Rejected"
    })
    @IsString()
    readonly status: QuestStatus;
}
