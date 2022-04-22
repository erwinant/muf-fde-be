"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReshapingOptions = void 0;
exports.ReshapingOptions = {
    virtuals: true,
    transform: function (doc, ret) {
        delete ret.id;
        return ret;
    }
};
//# sourceMappingURL=ReshapingOptions.js.map