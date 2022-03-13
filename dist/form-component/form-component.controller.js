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
exports.FormComponentController = void 0;
const common_1 = require("@nestjs/common");
const form_component_service_1 = require("./form-component.service");
const create_form_component_dto_1 = require("./dto/create-form-component.dto");
const update_form_component_dto_1 = require("./dto/update-form-component.dto");
let FormComponentController = class FormComponentController {
    constructor(formComponentService) {
        this.formComponentService = formComponentService;
    }
    create(createFormComponentDto) {
        return this.formComponentService.create(createFormComponentDto);
    }
    findAll(criteria) {
        return this.formComponentService.findAll(criteria);
    }
    findOne(id) {
        return this.formComponentService.findOne(+id);
    }
    update(id, updateFormComponentDto) {
        return this.formComponentService.update(id, updateFormComponentDto);
    }
    remove(id) {
        return this.formComponentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_form_component_dto_1.CreateFormComponentDto]),
    __metadata("design:returntype", void 0)
], FormComponentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('criteria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormComponentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormComponentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_form_component_dto_1.UpdateFormComponentDto]),
    __metadata("design:returntype", void 0)
], FormComponentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormComponentController.prototype, "remove", null);
FormComponentController = __decorate([
    (0, common_1.Controller)('form-component'),
    __metadata("design:paramtypes", [form_component_service_1.FormComponentService])
], FormComponentController);
exports.FormComponentController = FormComponentController;
//# sourceMappingURL=form-component.controller.js.map