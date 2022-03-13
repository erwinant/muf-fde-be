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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_service_1 = require("../config/config.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.expiration = this.configService.get("WEBTOKEN_EXPIRATION_TIME");
    }
    async createToken({ _id, username, email, avatar, }) {
        return {
            expires: this.expiration,
            expiresPrettyPrint: AuthService_1.prettyPrintSeconds(this.expiration),
            token: this.jwtService.sign({ _id, username, email, avatar }),
        };
    }
    static prettyPrintSeconds(time) {
        const ntime = Number(time);
        const hours = Math.floor(ntime / 3600);
        const minutes = Math.floor((ntime % 3600) / 60);
        const seconds = Math.floor((ntime % 3600) % 60);
        return `${hours > 0 ? hours + (hours === 1 ? " hour," : " hours,") : ""} ${minutes > 0 ? minutes + (minutes === 1 ? " minute" : " minutes") : ""} ${seconds > 0 ? seconds + (seconds === 1 ? " second" : " seconds") : ""}`;
    }
    async validateUser(payload) {
        const user = await this.profileService.getByUsernameAndPass(payload.username, payload.password);
        if (!user) {
            throw new common_1.UnauthorizedException("Could not authenticate. Please try again.");
        }
        return user;
    }
};
AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_service_1.ConfigService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map