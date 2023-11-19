import { PartialType } from '@nestjs/swagger';
import { CreateTestAuthDto } from './create-test-auth.dto';

export class UpdateTestAuthDto extends PartialType(CreateTestAuthDto) {}
