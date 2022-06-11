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
exports.ProvinceSchema = exports.Province = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const base_model_1 = require("../../base-model");
const ReshapingOptions_1 = require("../../helper/ReshapingOptions");
let Province = class Province extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Province.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Province.prototype, "code", void 0);
Province = __decorate([
    (0, mongoose_1.Schema)({})
], Province);
exports.Province = Province;
const schema = mongoose_1.SchemaFactory.createForClass(Province);
schema.set('toJSON', ReshapingOptions_1.ReshapingOptions);
schema.virtual('regencies', {
    ref: 'Regency',
    localField: 'code',
    foreignField: 'province_code'
});
exports.ProvinceSchema = schema;
//# sourceMappingURL=province.entity.js.map