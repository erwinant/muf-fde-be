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
exports.RegencyController = void 0;
const common_1 = require("@nestjs/common");
const regency_service_1 = require("./regency.service");
const regency_entity_1 = require("./entities/regency.entity");
let RegencyController = class RegencyController {
    constructor(regencyService) {
        this.regencyService = regencyService;
    }
    create(regency) {
        return this.regencyService.create(regency);
    }
    async findAll(query) {
        let { filter, skip = 0, limit = 50, sort = null, populate = null } = query;
        return await this.regencyService.findAll(filter, skip, limit, sort, populate);
    }
    findOne(id) {
        return this.regencyService.findOne(id);
    }
    update(id, regency) {
        return this.regencyService.update(id, regency);
    }
    delete(id) {
        return this.regencyService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [regency_entity_1.Regency]),
    __metadata("design:returntype", void 0)
], RegencyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RegencyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegencyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, regency_entity_1.Regency]),
    __metadata("design:returntype", void 0)
], RegencyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegencyController.prototype, "delete", null);
RegencyController = __decorate([
    (0, common_1.Controller)('regency'),
    __metadata("design:paramtypes", [regency_service_1.RegencyService])
], RegencyController);
exports.RegencyController = RegencyController;
//# sourceMappingURL=regency.controller.js.map