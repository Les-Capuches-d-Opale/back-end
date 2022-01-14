import { Body, Controller, Get, Param, Post, Put, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateWriteOpResult } from 'mongoose';
import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { CreateQuestDto } from './dto/createQuest.dto';
import { SetStatusQuestDto } from './dto/setStatusQuest.dto';
import { Quest } from './entities/quest.entity';
import { QuestsService } from './quests.service';

@ApiBearerAuth()
@ApiTags('quests')
@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) { }

  @Get('/')
  getAll(@Request() req): Promise<Quest[]> {
    return this.questsService.findAll(req.user.adminId);
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
  changeStatus(@Body() setStatusQuest: SetStatusQuestDto): Promise<UpdateWriteOpResult> {
    return this.questsService.changeStatus(setStatusQuest)
  }
}
