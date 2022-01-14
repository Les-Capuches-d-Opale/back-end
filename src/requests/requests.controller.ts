import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';
import { SetStatusRequestDto } from './dto/setStatusRequest.dto';
import { UpdateWriteOpResult } from 'mongoose';
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

  @Put("/")
  setStatusRequest(@Body() setStatusRequest: SetStatusRequestDto): Promise<UpdateWriteOpResult> {
    return this.requestsService.setStatus(setStatusRequest)
  }

  @Post()
  create(
    @Body() createRequestDto: CreateRequestDto,
  ): Promise<Request> {
    return this.requestsService.create(createRequestDto);
  }
}
