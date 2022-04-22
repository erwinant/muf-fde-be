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
exports.RegencySchema = exports.Regency = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const ReshapingOptions_1 = require("../../helper/ReshapingOptions");
const province_entity_1 = require("../../province/entities/province.entity");
let Regency = class Regency {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Regency.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Regency.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Regency.prototype, "province_code", void 0);
Regency = __decorate([
    (0, mongoose_1.Schema)()
], Regency);
exports.Regency = Regency;
const schema = mongoose_1.SchemaFactory.createForClass(Regency);
schema.set('toJSON', ReshapingOptions_1.ReshapingOptions);
schema.set('toObject', ReshapingOptions_1.ReshapingOptions);
schema.virtual('province', {
    ref: 'Province',
    localField: 'province_code',
    foreignField: 'code',
    justOne: true
});
exports.RegencySchema = schema;
//# sourceMappingURL=regency.entity.js.map