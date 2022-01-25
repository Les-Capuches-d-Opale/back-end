import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, IsString } from 'class-validator';
import { UnavailabilityType } from '../entities/adventurer.entity';


export class CreateUnavailabilityDto {
    @ApiProperty({
        description: 'The type of the unavailability.',
        example: 'DayOf',
    })
    @IsString()
    readonly type: UnavailabilityType;

    @ApiProperty({
        description: 'The date when the indisponible date will start.',
        example: '2021-11-02',
    })
    @IsString()
    readonly dateStart: string;

    @ApiProperty({
        description: 'The date when the indisponible date will finsish.',
        example: '2021-11-02',
    })
    @IsString()
    readonly dateEnd: string;

    @ApiProperty({
        description: "",
        example: "",
    })
    @IsOptional()
    @IsString()
    readonly requestId: string
}