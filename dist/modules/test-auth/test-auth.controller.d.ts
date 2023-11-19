import { TestAuthService } from './test-auth.service';
export declare class TestAuthController {
    private readonly testAuthService;
    constructor(testAuthService: TestAuthService);
    findAll(): string;
}
