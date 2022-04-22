import { ProvincesService } from './provinces.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
export declare class ProvincesController {
    private readonly provincesService;
    constructor(provincesService: ProvincesService);
    create(createProvinceDto: CreateProvinceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProvinceDto: UpdateProvinceDto): string;
    remove(id: string): string;
}
