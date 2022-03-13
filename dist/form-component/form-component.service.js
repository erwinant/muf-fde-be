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
exports.FormComponentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const form_component_entity_1 = require("./entities/form-component.entity");
let FormComponentService = class FormComponentService {
    constructor(formComponentModel) {
        this.formComponentModel = formComponentModel;
    }
    create(createFormComponentDto) {
        const createFormComponent = new this.formComponentModel(createFormComponentDto);
        return createFormComponent.save();
    }
    findAll(criteria = "{}") {
        console.log(criteria);
        let jsonCriteria = JSON.parse(criteria);
        console.log(jsonCriteria);
        return this.formComponentModel.find(jsonCriteria).exec();
    }
    findOne(id) {
        return this.formComponentModel.findById(id).exec();
    }
    async update(id, updateFormComponentDto) {
        let updateObj = await this.formComponentModel.findById(id).exec();
        updateObj.name = updateFormComponentDto.name;
        updateObj.components = updateFormComponentDto.components;
        return updateObj.save();
    }
    remove(id) {
        return `This action removes a #${id} formComponent`;
    }
};
FormComponentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(form_component_entity_1.FormComponent.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], FormComponentService);
exports.FormComponentService = FormComponentService;
//# sourceMappingURL=form-component.service.js.map