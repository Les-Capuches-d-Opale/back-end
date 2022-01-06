import { QuestsService } from './quests.service';
import { Controller, Get } from '@nestjs/common';
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
}
