import { ProvinceService } from './province.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
export declare class ProvinceController {
    private readonly provinceService;
    constructor(provinceService: ProvinceService);
    create(createProvinceDto: CreateProvinceDto): string;
    findAll(): Promise<import("./entities/province.entity").Province[]>;
    findOne(id: string): string;
    update(id: string, updateProvinceDto: UpdateProvinceDto): string;
    remove(id: string): string;
}
