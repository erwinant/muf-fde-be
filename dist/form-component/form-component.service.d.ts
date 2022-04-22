import { Model } from 'mongoose';
import { CreateFormComponentDto } from './dto/create-form-component.dto';
import { UpdateFormComponentDto } from './dto/update-form-component.dto';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';
export declare class FormComponentService {
    private model;
    constructor(model: Model<FormComponentDocument>);
    create(createFormComponentDto: CreateFormComponentDto): Promise<FormComponent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(criteria?: string): Promise<FormComponent[]>;
    findOne(id: string): Promise<FormComponent>;
    update(id: string, updateFormComponentDto: UpdateFormComponentDto): Promise<FormComponentDocument>;
    remove(id: number): string;
}
