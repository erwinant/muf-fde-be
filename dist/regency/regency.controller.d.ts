import { RegencyService } from './regency.service';
import { CreateRegencyDto } from './dto/create-regency.dto';
import { UpdateRegencyDto } from './dto/update-regency.dto';
export declare class RegencyController {
    private readonly regencyService;
    constructor(regencyService: RegencyService);
    create(createRegencyDto: CreateRegencyDto): string;
    findAll(): Promise<import("./entities/regency.entity").Regency[]>;
    findOne(id: string): string;
    update(id: string, updateRegencyDto: UpdateRegencyDto): string;
    remove(id: string): string;
}
