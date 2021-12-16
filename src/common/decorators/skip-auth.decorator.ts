import { SetMetadata } from '@nestjs/common';

export const IS_SKIPPING_AUTH = 'SkipAuth';
export const SkipAuth = () => SetMetadata(IS_SKIPPING_AUTH, true);
