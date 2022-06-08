
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GenericService } from 'src/generic-service';
import { Regency, RegencyDocument } from './entities/regency.entity';

//@Injectable()
// export class RegencyService {
//   constructor(@InjectModel(Regency.name) private model: Model<RegencyDocument>){

//   }
//   create(createRegencyDto: CreateRegencyDto) {
//     return 'This action adds a new regency';
//   }

//   findAll(criteria:string="{}"):Promise<Regency[]> {
//     let jsonCriteria = JSON.parse(criteria);
//     return this.model.find(jsonCriteria).populate('province').exec();
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} regency`;
//   }

//   update(id: number, updateRegencyDto: UpdateRegencyDto) {
//     return `This action updates a #${id} regency`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} regency`;
//   }
// }

@Injectable()
export class RegencyService extends GenericService<Regency,RegencyDocument> {
  constructor(
    @InjectModel(Regency.name) readonly model: Model<RegencyDocument>){
    super(model);
  }
}
