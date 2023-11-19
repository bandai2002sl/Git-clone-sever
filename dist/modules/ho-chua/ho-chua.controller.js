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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoChuaController = void 0;
const common_1 = require("@nestjs/common");
const ho_chua_service_1 = require("./ho-chua.service");
const create_ho_chua_dto_1 = require("./dto/create-ho-chua.dto");
const update_ho_chua_dto_1 = require("./dto/update-ho-chua.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const shared_1 = require("../../common/shared");
let HoChuaController = class HoChuaController {
    constructor(hoChuaService) {
        this.hoChuaService = hoChuaService;
    }
    create(createHoChuaDto) {
        return this.hoChuaService.create(createHoChuaDto);
    }
    findAll() {
        return this.hoChuaService.findAll();
    }
    findOne(id) {
        return this.hoChuaService.getOne(+id);
    }
    update(id, updateHoChuaDto) {
        return this.hoChuaService.update(+id, updateHoChuaDto);
    }
    remove(id) {
        return this.hoChuaService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ho_chua),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ho_chua_dto_1.CreateHoChuaDto]),
    __metadata("design:returntype", void 0)
], HoChuaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ho_chua),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HoChuaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HoChuaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ho_chua),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ho_chua_dto_1.UpdateHoChuaDto]),
    __metadata("design:returntype", void 0)
], HoChuaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Ho_chua),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HoChuaController.prototype, "remove", null);
HoChuaController = __decorate([
    (0, swagger_1.ApiTags)('Hồ chứa'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('ho-chua'),
    (0, common_1.UseGuards)(jwt_strategy_1.AdminAuthGuard),
    __metadata("design:paramtypes", [ho_chua_service_1.HoChuaService])
], HoChuaController);
exports.HoChuaController = HoChuaController;
//# sourceMappingURL=ho-chua.controller.js.map