import { LoginDto } from './getAdministrator.dto';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateAdministratorDto extends PartialType(LoginDto) {
  @ApiProperty({
    description: 'The username of the adminstrator.',
    example: 'DidierKillier44',
  })
  @IsString()
  readonly username?: string;
}
