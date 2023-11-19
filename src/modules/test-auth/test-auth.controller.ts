import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { PageKey, PermissionKey } from 'src/common/shared';

import { AdminAuthGuard } from '../auth/jwt.strategy';
import { ApiBearerAuth } from '@nestjs/swagger';
import { TestAuthService } from './test-auth.service';

@Controller('test-auth')
export class TestAuthController {
  constructor(private readonly testAuthService: TestAuthService) {}

  @Get()
  @ApiBearerAuth()
  @SetMetadata('pageKey', PageKey.Trang_chu)
  @SetMetadata('permissionKey', PermissionKey.Them)
  findAll() {
    return this.testAuthService.findAll();
  }
}
