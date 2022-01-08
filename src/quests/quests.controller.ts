import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { QuestsService } from './quests.service';
import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Quest } from './entities/quest.entity';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
import { Request } from 'src/requests/entities/request.entity';

@ApiBearerAuth()
@ApiTags('quests')
@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) { }

  @Get('/')
  getAll(): Promise<Quest[]> {
    return this.questsService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Quest> {
    return this.questsService.findOne(id);
  }

  @Post("/")
  createQuest(@Body() createQuestDto: CreateQuestDto): Promise<Quest> {
    return this.questsService.createQuest(createQuestDto)
  }

  @Put("/")
  setStatusQuest(@Body() setStatusQuest: SetStatusQuestDto): Promise<Request> {
    return this.questsService.setStatus(setStatusQuest)
  }
}
