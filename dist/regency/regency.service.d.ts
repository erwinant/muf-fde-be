import { Model } from 'mongoose';
import { GenericService } from 'src/generic-service';
import { Regency, RegencyDocument } from './entities/regency.entity';
export declare class RegencyService extends GenericService<Regency, RegencyDocument> {
    readonly model: Model<RegencyDocument>;
    constructor(model: Model<RegencyDocument>);
}
