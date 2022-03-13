import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFormComponentDto } from './dto/create-form-component.dto';
import { UpdateFormComponentDto } from './dto/update-form-component.dto';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';


@Injectable()
export class FormComponentService {
  constructor(@InjectModel(FormComponent.name) private formComponentModel: Model<FormComponentDocument>){

  }
  create(createFormComponentDto: CreateFormComponentDto) {
    const createFormComponent = new this.formComponentModel(createFormComponentDto);
    return createFormComponent.save();
  }

  findAll(criteria:string="{}"):Promise<FormComponent[]> {
    let jsonCriteria = JSON.parse(criteria);
    return this.formComponentModel.find(jsonCriteria).exec();
  }

  findOne(id: number) :Promise<FormComponent> {
    return this.formComponentModel.findById(id).exec();
  }

  async update(id: string, updateFormComponentDto: UpdateFormComponentDto) {
    let updateObj = await this.formComponentModel.findById(id).exec() as FormComponentDocument;
    updateObj.name = updateFormComponentDto.name;
    updateObj.components = updateFormComponentDto.components;
    return updateObj.save();
  }

  remove(id: number) {
    return `This action removes a #${id} formComponent`;
  }
}
