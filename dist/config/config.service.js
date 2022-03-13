"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const dotenv_1 = require("dotenv");
const joi = require("joi");
const fs = require("fs");
class ConfigService {
    constructor(filePath) {
        const config = (0, dotenv_1.parse)(fs.readFileSync(filePath));
        this.envConfig = ConfigService.validateInput(config);
    }
    static validateInput(envConfig) {
        const envVarsSchema = joi.object({
            APP_ENV: joi
                .string()
                .valid("dev", "prod")
                .default("dev"),
            APP_URL: joi.string().uri({
                scheme: [/https?/],
            }),
            WEBTOKEN_SECRET_KEY: joi.string().required(),
            WEBTOKEN_EXPIRATION_TIME: joi.number().default(1800),
            DB_URL: joi.string().regex(/^mongodb/),
        });
        const { error, value } = envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return value;
    }
    get(key) {
        return this.envConfig[key];
    }
    isEnv(env) {
        return this.envConfig.APP_ENV === env;
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map