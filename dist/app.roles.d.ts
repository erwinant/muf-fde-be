import { RolesBuilder } from "nest-access-control";
export declare enum AppRoles {
    DEFAULT = "DEFAULT",
    ADMIN = "ADMIN"
}
export declare const roles: RolesBuilder;
