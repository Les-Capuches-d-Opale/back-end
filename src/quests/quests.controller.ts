import { ParseObjectIdPipe } from './../common/pipes/object-id.pipes';
import { QuestsService } from './quests.service';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Quest } from './entities/quest.entity';

@ApiBearerAuth()
@ApiTags('quests')
@Controller('quests')
export class QuestsController {
  constructor(private readonly questsService: QuestsService) {}

  @Get('/')
  getAll(): Promise<Quest[]> {
    return this.questsService.findAll();
  }

  @Get('/:id')
  getOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Quest> {
    return this.questsService.findOne(id);
  }
}
