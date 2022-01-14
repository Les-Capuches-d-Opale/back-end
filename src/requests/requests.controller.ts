import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';
import { FilterRequestQueryDto } from './dto/filterRequestQuery.dto';

@ApiBearerAuth()
@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('/')
  getAll(): Promise<Request[]> {
    return this.requestsService.findAll();
  }

  @Get('/filter')
  FilterAll(
    @Query() filterRequestQueryDto: FilterRequestQueryDto,
  ): Promise<Request[]> {
    return this.requestsService.FilterAll(filterRequestQueryDto);
  }

}
