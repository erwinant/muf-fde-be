import { Model } from 'mongoose';
import { GenericService } from 'src/generic-service';
import { Province, ProvinceDocument } from './entities/province.entity';
export declare class ProvinceService extends GenericService<Province, ProvinceDocument> {
    readonly model: Model<ProvinceDocument>;
    constructor(model: Model<ProvinceDocument>);
}
