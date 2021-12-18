import { Administrator } from 'src/administrators/entities/administrator.entity';
import { AdministratorsService } from './administrators.service';
import { LoginDto } from './dto/getAdministrator.dto';
import { AuthService } from './../auth/auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Put,
} from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { SkipAuth } from 'src/common/decorators/skip-auth.decorator';
import { UpdateAdministratorDto } from './dto/updateAdministrator.dto';

@ApiTags('administrators')
@Controller('administrators')
export class AdministratorsController {
  constructor(
    private authService: AuthService,
    private administratorsService: AdministratorsService,
  ) {}

  @SkipAuth()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(
    @Request() req,
    @Body() loginDto: LoginDto,
  ): Promise<{ access_token: string }> {
    return this.authService.login(req.user);
  }

  @Put('/')
  @ApiBearerAuth()
  update(
    @Request() req,
    @Body() updateAdministratorDto: UpdateAdministratorDto,
  ): Promise<Administrator> {
    return this.administratorsService.update(
      req.user.adminId,
      updateAdministratorDto,
    );
  }
}
