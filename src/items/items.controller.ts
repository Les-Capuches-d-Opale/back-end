import { BuyItemDto } from './dto/buyItem.dto';
import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { FilterItemQueryDto } from './dto/filterItemQuery.dto';
import { ItemsService } from './items.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Get,
  Param,
  Put,
  Query,
  Request,
  Body,
} from '@nestjs/common';
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

  @Put('/buy')
  async buyOne(
    @Body() buyItemDto: BuyItemDto,
    @Request() req,
  ): Promise<Item[]> {
    return await this.itemsService.buyOne(buyItemDto, req.user.adminId);
  }
}
