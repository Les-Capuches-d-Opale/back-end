import { AdministratorsService } from './../administrators/administrators.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private administratorsService: AdministratorsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const administrator = await this.administratorsService.findOne(email);

    if (!administrator) return null;

    const isPasswordValid = await bcrypt.compare(pass, administrator.password);

    if (administrator && isPasswordValid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = administrator;
      return result;
    }
    return null;
  }

  async login({ _doc }: any): Promise<{ access_token: string }> {
    const payload = {
      username: _doc.username,
      adminId: _doc._id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
