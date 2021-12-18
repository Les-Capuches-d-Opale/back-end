/* eslint-disable @typescript-eslint/no-this-alias */
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import * as bcrypt from 'bcrypt';
import {
  Administrator,
  AdministratorSchema,
} from './entities/administrator.entity';
import { AuthModule } from 'src/auth/auth.module';
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

          // eslint-disable-next-line @typescript-eslint/ban-types
          schema.pre<Administrator>('save', function (next: Function) {
            const administrator = this;

            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(
              administrator.password,
              salt,
            );

            administrator.password = hashedPassword;

            next();
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
