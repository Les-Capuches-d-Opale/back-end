import { Speciality, SpecialitySchema } from './entities/speciality.entity';
import { Adventurer, AdventurerSchema } from './entities/adventurer.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdventurersController } from './adventurers.controller';
import { AdventurersService } from './adventurers.service';

@Module({
  imports: [
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
