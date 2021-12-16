import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('adventurers')
@Controller('adventurers')
export class AdventurersController {
  @Get()
  findAll(): string {
    return 'This action returns all adventurers';
  }
}
