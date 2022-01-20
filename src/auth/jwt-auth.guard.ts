import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_SKIPPING_AUTH } from '../common/decorators/skip-auth.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const skipAuth = this.reflector.getAllAndOverride<boolean>(
      IS_SKIPPING_AUTH,
      [context.getHandler(), context.getClass()],
    );
    if (skipAuth) {
      return true;
    }
    return super.canActivate(context);
  }
}
