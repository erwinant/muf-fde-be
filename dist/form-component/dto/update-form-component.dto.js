"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFormComponentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_form_component_dto_1 = require("./create-form-component.dto");
class UpdateFormComponentDto extends (0, mapped_types_1.PartialType)(create_form_component_dto_1.CreateFormComponentDto) {
}
exports.UpdateFormComponentDto = UpdateFormComponentDto;
//# sourceMappingURL=update-form-component.dto.js.map