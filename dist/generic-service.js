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
exports.GenericService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const moment = require("moment");
let GenericService = class GenericService {
    constructor(model) {
        this.model = model;
        for (const modelName of Object.keys(model.collection.conn.models)) {
            if (model.collection.conn.models[modelName] === this.model) {
                this.modelName = modelName;
                break;
            }
        }
    }
    async create(input) {
        return await this.model.create(input);
    }
    async findAll(conditions = "{}", skip = 0, limit = 50, sort = null, populate = null) {
        try {
            let jsonCriteria = JSON.parse(conditions);
            jsonCriteria = Object.assign(Object.assign({}, jsonCriteria), { deleted_at: { $exists: false } });
            let cmd = this.model.find(jsonCriteria).skip(+skip).limit(+limit);
            if (sort)
                cmd = cmd.sort(JSON.parse(sort));
            if (populate)
                cmd = cmd.populate(populate);
            return await cmd.exec();
        }
        catch (err) {
            throw new Error("Error occured while fetching data to database!");
        }
    }
    async findOne(id) {
        try {
            return await this.model.findOne({ _id: id, deleted_at: { $exists: false } }).exec();
        }
        catch (err) {
            throw new Error("Error occured while fetching data to database!");
        }
    }
    async update(id, input) {
        try {
            let obj = input;
            this.deleteProperty(obj, '_id');
            await this.model.findOneAndUpdate({ _id: id, deleted_at: { $exists: false } }, obj).exec();
            return await this.model.findOne({ _id: id }).exec();
        }
        catch (err) {
            console.log(err);
            throw new Error("Error occured while fetching data to database!");
        }
    }
    async delete(id) {
        try {
            await this.model.findOneAndUpdate({ _id: id }, { deleted_at: moment.tz() }).exec();
            return await this.model.findOne({ _id: id }).exec();
        }
        catch (err) {
            console.log(err);
            throw new Error("Error occured while fetching data to database!");
        }
    }
    deleteProperty(obj, deletedKey) {
        for (const key of Object.keys(obj)) {
            if (typeof obj[key] === deletedKey) {
                delete obj[key];
            }
        }
        return obj;
    }
};
GenericService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mongoose_1.Model])
], GenericService);
exports.GenericService = GenericService;
//# sourceMappingURL=generic-service.js.map