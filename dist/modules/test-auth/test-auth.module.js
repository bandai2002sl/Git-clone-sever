"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAuthModule = void 0;
const common_1 = require("@nestjs/common");
const test_auth_service_1 = require("./test-auth.service");
const test_auth_controller_1 = require("./test-auth.controller");
let TestAuthModule = class TestAuthModule {
};
TestAuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_auth_controller_1.TestAuthController],
        providers: [test_auth_service_1.TestAuthService]
    })
], TestAuthModule);
exports.TestAuthModule = TestAuthModule;
//# sourceMappingURL=test-auth.module.js.map