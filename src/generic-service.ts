import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Province, ProvinceDocument } from './entities/province.entity';

@Injectable()
export class ProvinceService {
  constructor(@InjectModel(Province.name) private model: Model<T>)
  {

  }
  create(createProvinceDto: CreateProvinceDto) {
    return 'This action adds a new province';
  }

  findAll(criteria:string="{}"):Promise<Province[]> {
    let jsonCriteria = JSON.parse(criteria);
    return this.model.find(jsonCriteria).populate('regencies').exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  update(id: number, updateProvinceDto: UpdateProvinceDto) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
