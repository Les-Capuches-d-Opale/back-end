import { RequestsModule } from './../requests/requests.module';
import { ItemsModule } from './../items/items.module';
import { QuestsModule } from './../quests/quests.module';
import { Speciality, SpecialitySchema } from './entities/speciality.entity';
import { Adventurer, AdventurerSchema } from './entities/adventurer.entity';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdventurersController } from './adventurers.controller';
import { AdventurersService } from './adventurers.service';
import { Unavailability, UnavailabilitySchema } from './entities/unavailability.entity';

@Module({
  imports: [
    forwardRef(() => QuestsModule),
    forwardRef(() => ItemsModule),
    forwardRef(() => RequestsModule),
    MongooseModule.forFeature([
      {
        name: Adventurer.name,
        schema: AdventurerSchema,
      },
      {
        name: Speciality.name,
        schema: SpecialitySchema,
      },
      {
        name: Unavailability.name,
        schema: UnavailabilitySchema,
      },
    ]),
  ],
  controllers: [AdventurersController],
  providers: [AdventurersService],
  exports: [AdventurersService],
})
export class AdventurersModule {}
