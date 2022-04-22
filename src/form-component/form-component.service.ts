import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFormComponentDto } from './dto/create-form-component.dto';
import { UpdateFormComponentDto } from './dto/update-form-component.dto';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';


@Injectable()
export class FormComponentService {
  constructor(@InjectModel(FormComponent.name) private model: Model<FormComponentDocument>){

  }
  create(createFormComponentDto: CreateFormComponentDto) {
    const createFormComponent = new this.model(createFormComponentDto);
    return createFormComponent.save();
  }

  findAll(criteria:string="{}"):Promise<FormComponent[]> {
    let jsonCriteria = JSON.parse(criteria);
    return this.model.find(jsonCriteria).exec();
  }

  findOne(id: string) :Promise<FormComponent> {
    return this.model.findById(id).exec();
  }

  async update(id: string, updateFormComponentDto: UpdateFormComponentDto) {
    let updateObj = await this.model.findById(id).exec() as FormComponentDocument;
    updateObj.name = updateFormComponentDto.name;
    updateObj.components = updateFormComponentDto.components;
    return updateObj.save();
  }

  remove(id: number) {
    return `This action removes a #${id} formComponent`;
  }
}
