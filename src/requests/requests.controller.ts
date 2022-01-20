import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@ApiBearerAuth()
@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('/')
  getAll(
    @Query() paginationQueryDto: PaginationQueryDto,
  ): Promise<Request[] | any> {
    return this.requestsService.findAll(paginationQueryDto);
  }
}
