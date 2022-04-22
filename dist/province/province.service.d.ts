import { Model } from 'mongoose';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Province, ProvinceDocument } from './entities/province.entity';
export declare class ProvinceService {
    private model;
    constructor(model: Model<ProvinceDocument>);
    create(createProvinceDto: CreateProvinceDto): string;
    findAll(criteria?: string): Promise<Province[]>;
    findOne(id: number): string;
    update(id: number, updateProvinceDto: UpdateProvinceDto): string;
    remove(id: number): string;
}
