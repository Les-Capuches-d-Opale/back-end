import { ItemsService } from './items.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { Item } from './entities/item.entity';

@ApiBearerAuth()
@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/')
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }
}
