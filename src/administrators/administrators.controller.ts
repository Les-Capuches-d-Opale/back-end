import { AuthService } from './../auth/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { SkipAuth } from 'src/common/decorators/skip-auth.decorator';

@ApiTags('administrators')
@Controller('administrators')
export class AdministratorsController {
  constructor(private authService: AuthService) {}

  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
