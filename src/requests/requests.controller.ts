import { Speciality } from './../adventurers/entities/speciality.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';

@ApiBearerAuth()
@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) { }

  @Get('/')
  getAll(): Promise<Request[]> {
    return this.requestsService.findAll();
  }

  @Post()
  create(
    @Body() data: Request,
  ){
    console.log(data);
   // return this.requestsService.create(data);
  }
}
