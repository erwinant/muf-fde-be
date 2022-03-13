/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Model } from 'mongoose';
import { CreateFormComponentDto } from './dto/create-form-component.dto';
import { UpdateFormComponentDto } from './dto/update-form-component.dto';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';
export declare class FormComponentService {
    private formComponentModel;
    constructor(formComponentModel: Model<FormComponentDocument>);
    create(createFormComponentDto: CreateFormComponentDto): Promise<FormComponent & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(criteria?: string): Promise<FormComponent[]>;
    findOne(id: number): Promise<FormComponent>;
    update(id: string, updateFormComponentDto: UpdateFormComponentDto): Promise<FormComponentDocument>;
    remove(id: number): string;
}
