import { FormComponent, FormComponentDocument } from './entities/form-component.entity';
import { FormComponentService } from './form-component.service';
export declare class FormComponentController {
    private readonly formComponentService;
    constructor(formComponentService: FormComponentService);
    create(formComponent: FormComponent): Promise<FormComponentDocument>;
    findAll(criteria?: any): Promise<(FormComponent & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<FormComponent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, formComponent: FormComponent): Promise<FormComponent>;
    remove(id: string): Promise<FormComponent>;
}
