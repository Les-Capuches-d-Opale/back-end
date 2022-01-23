import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateWriteOpResult } from 'mongoose';
import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { CreateRequestDto } from './dto/createRequest.dto';
import { FilterRequestQueryDto } from './dto/filterRequestQuery.dto';
import { SetStatusRequestDto } from './dto/setStatusRequest.dto';
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
    @Query() filterRequestQueryDto: FilterRequestQueryDto,
  ): Promise<Request[]> {
    return this.requestsService.filterAll(filterRequestQueryDto);
  }

  @Get('/:id')
  getOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Request> {
    return this.requestsService.findOne(id);
  }

  @Get('/:id/available')
  getAvailableAdv(
    @Param('id', ParseObjectIdPipe) id: string,
  ): Promise<Request> {
    return this.requestsService.findAvailableAdventurers(id);
  }

  @Put('/:id')
  setStatusRequest(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() setStatusRequest: SetStatusRequestDto,
  ): Promise<UpdateWriteOpResult> {
    return this.requestsService.setStatus(id, setStatusRequest);
  }

  @Post()
  create(@Body() createRequestDto: CreateRequestDto): Promise<Request> {
    return this.requestsService.create(createRequestDto);
  }
}
