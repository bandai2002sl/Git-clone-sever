"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAuthController = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("../../common/shared");
const swagger_1 = require("@nestjs/swagger");
const test_auth_service_1 = require("./test-auth.service");
let TestAuthController = class TestAuthController {
    constructor(testAuthService) {
        this.testAuthService = testAuthService;
    }
    findAll() {
        return this.testAuthService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Trang_chu),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestAuthController.prototype, "findAll", null);
TestAuthController = __decorate([
    (0, common_1.Controller)('test-auth'),
    __metadata("design:paramtypes", [test_auth_service_1.TestAuthService])
], TestAuthController);
exports.TestAuthController = TestAuthController;
//# sourceMappingURL=test-auth.controller.js.map