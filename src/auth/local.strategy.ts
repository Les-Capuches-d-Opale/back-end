import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(usernameField: string, passwordField: string): Promise<any> {
    const administrator = await this.authService.validateUser(
      usernameField,
      passwordField,
    );
    if (!administrator) {
      throw new UnauthorizedException();
    }
    return administrator;
  }
}