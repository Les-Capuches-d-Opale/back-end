import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('adventurers')
@UseGuards(JwtAuthGuard)
@Controller('adventurers')
export class AdventurersController {
  @Get()
  findAll(): string {
    return 'This action returns all adventurers';
  }
}
