import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AdventurersController } from './adventurers/adventurers.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(process.env.DATABASE_URI),
  ],
  controllers: [AppController, AdventurersController],
  providers: [AppService],
})
export class AppModule {}
