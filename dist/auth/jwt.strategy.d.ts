import { JwtPayload } from "passport-jwt";
import { ConfigService } from "../config/config.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    readonly configService: ConfigService;
    constructor(configService: ConfigService);
    validate({ iat, exp, _id }: JwtPayload, done: any): Promise<boolean>;
}
export {};
