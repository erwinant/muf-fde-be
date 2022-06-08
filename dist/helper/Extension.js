"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extension = void 0;
function extension(ctr) {
    let originalFunction;
    return function (target, propertyKey, descriptor) {
        originalFunction = descriptor.value;
        ctr.prototype[propertyKey] = function (...args) {
            return originalFunction(this, ...args);
        };
    };
}
exports.extension = extension;
//# sourceMappingURL=Extension.js.map