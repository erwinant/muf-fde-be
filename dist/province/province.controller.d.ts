import { ProvinceService } from './province.service';
import { Province, ProvinceDocument } from './entities/province.entity';
export declare class ProvinceController {
    private readonly provinceService;
    constructor(provinceService: ProvinceService);
    create(province: Province): Promise<ProvinceDocument>;
    findAll(query: any): Promise<(Province & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<Province & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, province: Province): Promise<Province>;
    delete(id: string): Promise<Province>;
}
