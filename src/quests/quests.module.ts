import { Quest, QuestSchema } from './entities/quest.entity';
import { Module } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { QuestsController } from './quests.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Quest.name,
        schema: QuestSchema,
      },
    ]),
  ],
  providers: [QuestsService],
  controllers: [QuestsController],
  exports: [QuestsService],
})
export class QuestsModule {}
