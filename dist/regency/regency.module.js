"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegencyModule = void 0;
const common_1 = require("@nestjs/common");
const regency_service_1 = require("./regency.service");
const regency_controller_1 = require("./regency.controller");
const mongoose_1 = require("@nestjs/mongoose");
const regency_entity_1 = require("./entities/regency.entity");
const nestjs_moment_1 = require("@ccmos/nestjs-moment");
let RegencyModule = class RegencyModule {
};
RegencyModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: regency_entity_1.Regency.name, schema: regency_entity_1.RegencySchema }]),
            nestjs_moment_1.MomentModule.forRoot({
                tz: 'Asia/Jakarta',
            })
        ],
        controllers: [regency_controller_1.RegencyController],
        providers: [regency_service_1.RegencyService],
        exports: [regency_service_1.RegencyService]
    })
], RegencyModule);
exports.RegencyModule = RegencyModule;
//# sourceMappingURL=regency.module.js.map