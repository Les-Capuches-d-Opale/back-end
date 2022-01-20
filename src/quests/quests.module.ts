import { RequestsModule } from './../requests/requests.module';
import { Quest, QuestSchema } from './entities/quest.entity';
import { forwardRef, Module } from '@nestjs/common';
import { QuestsService } from './quests.service';
import { QuestsController } from './quests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Speciality,
  SpecialitySchema,
} from '../adventurers/entities/speciality.entity';

@Module({
  imports: [
    forwardRef(() => RequestsModule),
    MongooseModule.forFeature([
      {
        name: Quest.name,
        schema: QuestSchema,
      },
      {
        name: Speciality.name,
        schema: SpecialitySchema,
      },
    ]),
  ],
  providers: [QuestsService],
  controllers: [QuestsController],
  exports: [QuestsService],
})
export class QuestsModule {}
