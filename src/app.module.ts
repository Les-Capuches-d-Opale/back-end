import { ItemsController } from './items/items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AdventurersController } from './adventurers/adventurers.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    ItemsModule,
  ],
  controllers: [AppController, AdventurersController, ItemsController],
  providers: [AppService],
})
export class AppModule {}
