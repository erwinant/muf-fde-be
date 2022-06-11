/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Document } from 'mongoose';
import { BaseModel } from 'src/base-model';
export declare type ProvinceDocument = Province & Document;
export declare class Province extends BaseModel {
    name: string;
    code: string;
}
export declare const ProvinceSchema: import("mongoose").Schema<Document<Province, any, any>, import("mongoose").Model<Document<Province, any, any>, any, any, any>, any, any>;
