import { RegencyService } from './regency.service';
import { Regency, RegencyDocument } from './entities/regency.entity';
export declare class RegencyController {
    private readonly regencyService;
    constructor(regencyService: RegencyService);
    create(regency: Regency): Promise<RegencyDocument>;
    findAll(query: any): Promise<(Regency & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<Regency & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, regency: Regency): Promise<Regency>;
    delete(id: string): Promise<Regency>;
}
