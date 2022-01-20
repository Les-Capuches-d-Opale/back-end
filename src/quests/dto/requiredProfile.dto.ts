import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { AdventurerProfile } from 'src/requests/entities/adventurerProfile.entity';

export class RequiredProfilDto {
    @ApiProperty({
        description: 'The adventurer.',
        example: {
            id: "7cabe64dcf0d4447fa60f5e1"
        }
    })
    @IsString()
    readonly adventurer: string;

    @ApiProperty({
        description: 'The list of ID of adventurers.',
        example: [{
            id: "5cabe64dcf0d4447fa60f5e9",
            experience: 7
        }],
    })
    @IsArray()
    readonly reqProfile: AdventurerProfile
}
