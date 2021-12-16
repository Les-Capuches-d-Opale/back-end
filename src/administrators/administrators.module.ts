import { AuthModule } from './../auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [AdministratorsService],
  exports: [AdministratorsService],
  controllers: [AdministratorsController],
})
export class AdministratorsModule {}
