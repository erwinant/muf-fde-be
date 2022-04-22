"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const form_component_module_1 = require("./form-component/form-component.module");
const user_module_1 = require("./user/user.module");
const form_component_controller_1 = require("./form-component/form-component.controller");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const regency_module_1 = require("./regency/regency.module");
const province_module_1 = require("./province/province.module");
const province_controller_1 = require("./province/province.controller");
const regency_controller_1 = require("./regency/regency.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_module_1.ConfigModule, form_component_module_1.FormComponentModule, province_module_1.ProvinceModule, regency_module_1.RegencyModule],
                inject: [config_service_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get("DB_URL"),
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
            }),
            serve_static_1.ServeStaticModule.forRoot({
                serveRoot: '/.well-known/pki-validation',
                rootPath: (0, path_1.join)(__dirname, '.well-known/pki-validation'),
            }),
            form_component_module_1.FormComponentModule,
            user_module_1.UserModule,
            province_module_1.ProvinceModule,
            regency_module_1.RegencyModule
        ],
        controllers: [app_controller_1.AppController, form_component_controller_1.FormComponentController, province_controller_1.ProvinceController, regency_controller_1.RegencyController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map