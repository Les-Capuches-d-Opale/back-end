import { ItemsModule } from './../items/items.module';
import { QuestsModule } from './../quests/quests.module';
import { Speciality, SpecialitySchema } from './entities/speciality.entity';
import { Adventurer, AdventurerSchema } from './entities/adventurer.entity';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdventurersController } from './adventurers.controller';
import { AdventurersService } from './adventurers.service';

@Module({
  imports: [
    forwardRef(() => QuestsModule),
    forwardRef(() => ItemsModule),
    MongooseModule.forFeature([
      {
        name: Adventurer.name,
        schema: AdventurerSchema,
      },
      {
        name: Speciality.name,
        schema: SpecialitySchema,
      },
    ]),
  ],
  controllers: [AdventurersController],
  providers: [AdventurersService],
  exports: [AdventurersService],
})
export class AdventurersModule {}
