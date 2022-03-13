/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Document } from 'mongoose';
export declare type FormComponentDocument = FormComponent & Document;
export declare class Validation {
    name: string;
    pattern?: string;
    error_message?: string;
}
export declare class OptionMember {
    name: string;
    label: string;
    value: string;
}
export declare class Component {
    name: string;
    label: string;
    validation?: Validation[];
    type: string;
    default_size?: number;
    default_value?: string;
    options?: OptionMember[];
}
export declare class FormComponent {
    name: string;
    submitable: boolean;
    title: string;
    components: Component[];
}
export declare const FormComponentSchema: import("mongoose").Schema<Document<FormComponent, any, any>, import("mongoose").Model<Document<FormComponent, any, any>, any, any, any>, any, any>;
