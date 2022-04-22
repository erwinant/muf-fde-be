import { FormComponentService } from './form-component.service';
import { CreateFormComponentDto } from './dto/create-form-component.dto';
import { UpdateFormComponentDto } from './dto/update-form-component.dto';
export declare class FormComponentController {
    private readonly formComponentService;
    constructor(formComponentService: FormComponentService);
    create(createFormComponentDto: CreateFormComponentDto): Promise<import("./entities/form-component.entity").FormComponent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(criteria?: any): Promise<import("./entities/form-component.entity").FormComponent[]>;
    findOne(id: string): Promise<import("./entities/form-component.entity").FormComponent>;
    update(id: string, updateFormComponentDto: UpdateFormComponentDto): Promise<import("./entities/form-component.entity").FormComponentDocument>;
    remove(id: string): string;
}
