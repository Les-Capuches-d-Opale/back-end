import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'The email of the administrator.',
    example: 'valide@email.com',
  })
  @IsEmail()
  readonly email: string;

  @ApiProperty({
    description: 'The password of the adminstrator.',
    example: 'password-123',
  })
  @IsString()
  readonly password: string;
}
