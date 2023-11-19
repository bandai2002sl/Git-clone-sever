import { CreateTestAuthDto } from './dto/create-test-auth.dto';
import { Injectable } from '@nestjs/common';
import { UpdateTestAuthDto } from './dto/update-test-auth.dto';

@Injectable()
export class TestAuthService {
  findAll() {
    return `This action returns all testAuth`;
  }
}
