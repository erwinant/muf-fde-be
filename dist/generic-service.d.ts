/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/connection" />
import { Document } from 'mongoose';
import { Model } from 'mongoose';
export declare abstract class GenericService<U, T extends Document> {
    readonly model: Model<T>;
    private readonly modelName;
    constructor(model: Model<T>);
    create(input: T): Promise<T>;
    findAll(conditions?: string, skip?: number, limit?: number, sort?: any, populate?: any): Promise<import("mongoose").HydratedDocument<T, {}, {}>[]>;
    findOne(id: string): Promise<import("mongoose").HydratedDocument<T, {}, {}>>;
    update(id: string, input: U): Promise<U>;
    delete(id: string): Promise<U>;
    deleteProperty(obj: U, deletedKey: string): U;
}
