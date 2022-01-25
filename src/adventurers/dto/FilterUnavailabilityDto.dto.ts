import { UnavailabilityType } from './../entities/adventurer.entity';
import { IsOptional, IsString } from "class-validator";


export class FilterUnavailabilityDto {
    @IsOptional()
    @IsString()
    type?: UnavailabilityType
}