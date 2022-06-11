/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Document, Schema as MongooseSchema } from 'mongoose';
import { BaseModel } from 'src/base-model';
export declare type RegencyDocument = Regency & Document;
export declare class Regency extends BaseModel {
    name: string;
    code: string;
    province_code: string;
    deleted_at: Date;
}
export declare const RegencySchema: MongooseSchema<Document<Regency, any, any>, import("mongoose").Model<Document<Regency, any, any>, any, any, any>, any, any>;
