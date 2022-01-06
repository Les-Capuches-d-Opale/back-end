import { TransactionsController } from './transactions/transactions.controller';
import { QuestsController } from './quests/quests.controller';
import { TransactionsModule } from './transactions/transactions.module';
import { AdventurersModule } from './adventurers/adventurers.module';
import { ItemsController } from './items/items.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AdventurersController } from './adventurers/adventurers.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { MorganInterceptor, MorganModule } from 'nest-morgan';
import { QuestsModule } from './quests/quests.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    MorganModule,
    AdventurersModule,
    ItemsModule,
    AuthModule,
    AdministratorsModule,
    QuestsModule,
    TransactionsModule,
  ],
  controllers: [
    AppController,
    AdventurersController,
    ItemsController,
    QuestsController,
    TransactionsController,
    RequestModule,
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ],
})
export class AppModule {}
