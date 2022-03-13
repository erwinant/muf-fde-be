"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = exports.AppRoles = void 0;
const nest_access_control_1 = require("nest-access-control");
var AppRoles;
(function (AppRoles) {
    AppRoles["DEFAULT"] = "DEFAULT";
    AppRoles["ADMIN"] = "ADMIN";
})(AppRoles = exports.AppRoles || (exports.AppRoles = {}));
exports.roles = new nest_access_control_1.RolesBuilder();
exports.roles
    .grant(AppRoles.DEFAULT)
    .readOwn("profile")
    .updateOwn("profile")
    .deleteOwn("profile")
    .grant(AppRoles.ADMIN)
    .readAny("profiles")
    .updateAny("profiles")
    .deleteAny("profiles");
//# sourceMappingURL=app.roles.js.map