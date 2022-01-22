import { TransactionsModule } from './../transactions/transactions.module';
import { Item } from 'src/items/entities/item.entity';
import { ItemsModule } from './../items/items.module';
import { AdministratorsService } from 'src/administrators/administrators.service';
/* eslint-disable @typescript-eslint/no-this-alias */
import { AdministratorsController } from './administrators.controller';
import * as bcrypt from 'bcrypt';
import {
  Administrator,
  AdministratorSchema,
} from './entities/administrator.entity';
import { AuthModule } from '../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdventurersModule } from 'src/adventurers/adventurers.module';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => ItemsModule),
    forwardRef(() => AdventurersModule),
    forwardRef(() => TransactionsModule),
    MongooseModule.forFeatureAsync([
      {
        name: Administrator.name,
        useFactory: () => {
          const schema = AdministratorSchema;
          schema.pre<Administrator>('save', async function () {
            if (this.isModified('password')) {
              this.password = await bcrypt.hash(this.password, 10);
            }
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [AdministratorsService],
  exports: [AdministratorsService],
  controllers: [AdministratorsController],
})
export class AdministratorsModule {}
