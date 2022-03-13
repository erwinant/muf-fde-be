"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormComponentModule = void 0;
const common_1 = require("@nestjs/common");
const form_component_service_1 = require("./form-component.service");
const form_component_controller_1 = require("./form-component.controller");
const mongoose_1 = require("@nestjs/mongoose");
const form_component_entity_1 = require("./entities/form-component.entity");
let FormComponentModule = class FormComponentModule {
};
FormComponentModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'FormComponent', schema: form_component_entity_1.FormComponentSchema }])],
        controllers: [form_component_controller_1.FormComponentController],
        providers: [form_component_service_1.FormComponentService],
        exports: [form_component_service_1.FormComponentService]
    })
], FormComponentModule);
exports.FormComponentModule = FormComponentModule;
//# sourceMappingURL=form-component.module.js.map