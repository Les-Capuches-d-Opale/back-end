import { Speciality } from './../adventurers/entities/speciality.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { Request } from './entities/request.entity';
import { RequestsService } from './requests.service';

@ApiBearerAuth()
@ApiTags('requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) { }

  @Get('/')
  getAll(): Promise<Request[]> {
    this.requestsService.findAll().then(_data => {
      _data.map(data => {
        console.log(data)
      })
    })
    return this.requestsService.findAll();
  }
}
