import { Model } from 'mongoose';
import { CreateRegencyDto } from './dto/create-regency.dto';
import { UpdateRegencyDto } from './dto/update-regency.dto';
import { Regency, RegencyDocument } from './entities/regency.entity';
export declare class RegencyService {
    private model;
    constructor(model: Model<RegencyDocument>);
    create(createRegencyDto: CreateRegencyDto): string;
    findAll(criteria?: string): Promise<Regency[]>;
    findOne(id: number): string;
    update(id: number, updateRegencyDto: UpdateRegencyDto): string;
    remove(id: number): string;
}
