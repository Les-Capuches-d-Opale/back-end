import { TransactionsModule } from './../transactions/transactions.module';
import { AuthModule } from '../auth/auth.module';
import { AdministratorsModule } from './../administrators/administrators.module';
import { ItemSchema } from './entities/item.entity';
import { Item } from '../items/entities/item.entity';
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';

@Module({
  imports: [
    forwardRef(() => AdministratorsModule),
    forwardRef(() => TransactionsModule),
    AuthModule,
    MongooseModule.forFeature([
      {
        name: Item.name,
        schema: ItemSchema,
      },
    ]),
  ],
  providers: [ItemsService],
  controllers: [ItemsController],
  exports: [ItemsService],
})
export class ItemsModule {}
