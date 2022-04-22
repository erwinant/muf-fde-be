"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvinceModule = void 0;
const common_1 = require("@nestjs/common");
const province_service_1 = require("./province.service");
const province_controller_1 = require("./province.controller");
const mongoose_1 = require("@nestjs/mongoose");
const province_entity_1 = require("./entities/province.entity");
let ProvinceModule = class ProvinceModule {
};
ProvinceModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Province', schema: province_entity_1.ProvinceSchema }])],
        controllers: [province_controller_1.ProvinceController],
        providers: [province_service_1.ProvinceService],
        exports: [province_service_1.ProvinceService]
    })
], ProvinceModule);
exports.ProvinceModule = ProvinceModule;
//# sourceMappingURL=province.module.js.map