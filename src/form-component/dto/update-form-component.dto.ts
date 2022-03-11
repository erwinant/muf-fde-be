import { PartialType } from '@nestjs/mapped-types';
import { CreateFormComponentDto } from './create-form-component.dto';

export class UpdateFormComponentDto extends PartialType(CreateFormComponentDto) {}
