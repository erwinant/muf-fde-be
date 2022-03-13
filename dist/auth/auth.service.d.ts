import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "../config/config.service";
import { ProfileService } from "../profile/profile.service";
import { IProfile } from "../profile/profile.model";
import { LoginPayload } from "./payload/login.payload";
export interface ITokenReturnBody {
    expires: string;
    expiresPrettyPrint: string;
    token: string;
}
export declare class AuthService {
    private readonly jwtService;
    private readonly configService;
    private readonly profileService;
    private readonly expiration;
    constructor(jwtService: JwtService, configService: ConfigService, profileService: ProfileService);
    createToken({ _id, username, email, avatar, }: IProfile): Promise<ITokenReturnBody>;
    private static prettyPrintSeconds;
    validateUser(payload: LoginPayload): Promise<IProfile>;
}
