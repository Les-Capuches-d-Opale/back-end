import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { FilterItemQueryDto } from './dto/filterItemQuery.dto';
import { ItemsService } from './items.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Param, Query, Request } from '@nestjs/common';
import { Item } from './entities/item.entity';

@ApiBearerAuth()
@ApiTags('Items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/')
  async findAll(
    @Query() filterItemQueryDto: FilterItemQueryDto,
  ): Promise<Item[]> {
    return await this.itemsService.findAll(filterItemQueryDto);
  }

  @Get('/buy/:id')
  async buyOne(
    @Param('id', ParseObjectIdPipe) id: string,
    @Request() req,
  ): Promise<Item> {
    return await this.itemsService.buyOne(id, req.user.adminId);
  }
}
