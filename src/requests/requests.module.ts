import { AdventurersModule } from './../adventurers/adventurers.module';
import {
  AdventurerProfile,
  AdventurerProfileSchema,
} from './entities/adventurerProfile.entity';
import { RequestSchema } from './entities/request.entity';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Request } from './entities/request.entity';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';
import {
  Speciality,
  SpecialitySchema,
} from 'src/adventurers/entities/speciality.entity';

@Module({
  imports: [
    forwardRef(() => AdventurersModule),
    MongooseModule.forFeature([
      {
        name: Request.name,
        schema: RequestSchema,
      },
      {
        name: Speciality.name,
        schema: SpecialitySchema,
      },
    ]),
  ],
  providers: [RequestsService],
  controllers: [RequestsController],
  exports: [RequestsService],
})
export class RequestsModule {}
