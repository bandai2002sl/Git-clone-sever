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
exports.HinhThucChuyenDoiDatController = void 0;
const common_1 = require("@nestjs/common");
const hinh_thuc_chuyen_doi_dat_service_1 = require("./hinh-thuc-chuyen-doi-dat.service");
const create_hinh_thuc_chuyen_doi_dat_dto_1 = require("./dto/create-hinh-thuc-chuyen-doi-dat.dto");
const update_hinh_thuc_chuyen_doi_dat_dto_1 = require("./dto/update-hinh-thuc-chuyen-doi-dat.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_strategy_1 = require("../auth/jwt.strategy");
const shared_1 = require("../../common/shared");
let HinhThucChuyenDoiDatController = class HinhThucChuyenDoiDatController {
    constructor(hinhThucChuyenDoiDatService) {
        this.hinhThucChuyenDoiDatService = hinhThucChuyenDoiDatService;
    }
    create(createHinhThucChuyenDoiDatDto) {
        return this.hinhThucChuyenDoiDatService.create(createHinhThucChuyenDoiDatDto);
    }
    findAll() {
        return this.hinhThucChuyenDoiDatService.findAll();
    }
    getOne(id) {
        return this.hinhThucChuyenDoiDatService.getOne(+id);
    }
    update(id, updateHinhThucChuyenDoiDatDto) {
        return this.hinhThucChuyenDoiDatService.update(+id, updateHinhThucChuyenDoiDatDto);
    }
    deleteHTCDDat(id) {
        return this.hinhThucChuyenDoiDatService.deleteHTCDDat(+id);
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hinh_thuc_chuyen_doi_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Them),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hinh_thuc_chuyen_doi_dat_dto_1.CreateHinhThucChuyenDoiDatDto]),
    __metadata("design:returntype", void 0)
], HinhThucChuyenDoiDatController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hinh_thuc_chuyen_doi_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xem),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HinhThucChuyenDoiDatController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HinhThucChuyenDoiDatController.prototype, "getOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hinh_thuc_chuyen_doi_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Sua),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hinh_thuc_chuyen_doi_dat_dto_1.UpdateHinhThucChuyenDoiDatDto]),
    __metadata("design:returntype", void 0)
], HinhThucChuyenDoiDatController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.SetMetadata)('pageKey', shared_1.PageKey.Hinh_thuc_chuyen_doi_dat),
    (0, common_1.SetMetadata)('permissionKey', shared_1.PermissionKey.Xoa),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HinhThucChuyenDoiDatController.prototype, "deleteHTCDDat", null);
HinhThucChuyenDoiDatController = __decorate([
    (0, swagger_1.ApiTags)('Hình Thức Chuyển Đổi Đất'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('hinh-thuc-chuyen-doi-dat'),
    (0, common_1.UseGuards)(jwt_strategy_1.AdminAuthGuard),
    __metadata("design:paramtypes", [hinh_thuc_chuyen_doi_dat_service_1.HinhThucChuyenDoiDatService])
], HinhThucChuyenDoiDatController);
exports.HinhThucChuyenDoiDatController = HinhThucChuyenDoiDatController;
//# sourceMappingURL=hinh-thuc-chuyen-doi-dat.controller.js.map