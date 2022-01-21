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

@Module({
  imports: [
    forwardRef(() => AuthModule),
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
