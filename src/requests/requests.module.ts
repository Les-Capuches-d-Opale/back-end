import { RequestSchema } from './entities/request.entity';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Request } from './entities/request.entity';
import { RequestsController } from './requests.controller';
import { RequestsService } from './requests.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Request.name,
        schema: RequestSchema,
      }
    ]),
  ],
  providers: [RequestsService],
  controllers: [RequestsController],
  exports: [RequestsService]
})
export class RequestsModule {}
