import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
export declare class ProvincesService {
    create(createProvinceDto: CreateProvinceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProvinceDto: UpdateProvinceDto): string;
    remove(id: number): string;
}
