export interface EnvConfig {
    [key: string]: string;
}
export declare class ConfigService {
    private readonly envConfig;
    constructor(filePath: string);
    private static validateInput;
    get(key: string): string;
    isEnv(env: string): boolean;
}
