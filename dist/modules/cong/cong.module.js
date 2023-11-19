"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CongModule = void 0;
const common_1 = require("@nestjs/common");
const cong_service_1 = require("./cong.service");
const cong_controller_1 = require("./cong.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cong_entity_1 = require("./entities/cong.entity");
const administrative_unit_entity_1 = require("../administrative-unit/entities/administrative-unit.entity");
const administrative_unit_controller_1 = require("../administrative-unit/administrative-unit.controller");
const administrative_unit_service_1 = require("../administrative-unit/administrative-unit.service");
let CongModule = class CongModule {
};
CongModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                cong_entity_1.Cong,
                administrative_unit_entity_1.AdministrativeUnit
            ])],
        controllers: [
            cong_controller_1.CongController,
            administrative_unit_controller_1.AdministrativeUnitController,
        ],
        providers: [
            cong_service_1.CongService,
            administrative_unit_service_1.AdministrativeUnitService
        ]
    })
], CongModule);
exports.CongModule = CongModule;
//# sourceMappingURL=cong.module.js.map