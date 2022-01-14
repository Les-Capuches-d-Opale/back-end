import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/createRequest.dto';

@ApiBearerAuth()
@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get('/')
  getAll(): Promise<Request[]> {
    return this.requestsService.findAll();
  }

  @Post()
  create(
    @Body() createRequestDto: CreateRequestDto,
  ): Promise<Request> {
    return this.requestsService.create(createRequestDto);
  }
}
