import { Model } from 'mongoose';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';
import { GenericService } from 'src/generic-service';
export declare class FormComponentService extends GenericService<FormComponent, FormComponentDocument> {
    readonly model: Model<FormComponentDocument>;
    constructor(model: Model<FormComponentDocument>);
}
