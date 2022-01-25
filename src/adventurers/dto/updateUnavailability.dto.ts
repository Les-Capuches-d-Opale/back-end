import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from 'class-validator';

export class UpdateUnavailabilityDto {
    @ApiProperty({
        description: "",
        example: "",
    })
    @IsString()
    readonly id: String

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
}