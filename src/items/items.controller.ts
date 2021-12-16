import { ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

@ApiTags('Items')
@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'This action returns all items';
  }
}
