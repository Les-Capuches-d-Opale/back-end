import { Request } from '../requests/entities/request.entity';
import { RequestService } from 'src/request/request.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
@ApiTags('request')
@ApiBearerAuth()
@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  findAll(
    @Query() query
  ): Promise<Request[]> {
    return this.requestService.findAll();
  }
}
