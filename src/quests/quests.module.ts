import { RequestsModule } from './../requests/requests.module';
import { Quest, QuestSchema } from './entities/quest.entity';
import { AdministratorsModule } from './../administrators/administrators.module';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Speciality,
  SpecialitySchema,
} from '../adventurers/entities/speciality.entity';
import { TransactionsModule } from './../transactions/transactions.module';
import { AdventurersModule } from './../adventurers/adventurers.module';
import { QuestsController } from './quests.controller';
import { QuestsService } from './quests.service';

@Module({
  imports: [
    forwardRef(() => RequestsModule),
    forwardRef(() => AdventurersModule),
    forwardRef(() => TransactionsModule),
    forwardRef(() => AdministratorsModule),
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
