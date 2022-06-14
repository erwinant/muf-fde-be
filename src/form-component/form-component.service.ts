import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { FormComponent, FormComponentDocument } from './entities/form-component.entity';
import { GenericService } from './../generic-service';


@Injectable()
export class FormComponentService extends GenericService<FormComponent,FormComponentDocument> {
  constructor(@InjectModel(FormComponent.name) readonly model: Model<FormComponentDocument>){
    super(model);
  }
  // create(createFormComponentDto: CreateFormComponentDto) {
  //   const createFormComponent = new this.model(createFormComponentDto);
  //   return createFormComponent.save();
  // }

  // findAll(criteria:string="{}"):Promise<FormComponent[]> {
  //   let jsonCriteria = JSON.parse(criteria);
  //   return this.model.find(jsonCriteria).exec();
  // }

  // findOne(id: string) :Promise<FormComponent> {
  //   return this.model.findById(id).exec();
  // }

  // async update(id: string, updateFormComponentDto: UpdateFormComponentDto) {
  //   let updateObj = await this.model.findById(id).exec() as FormComponentDocument;
  //   updateObj.name = updateFormComponentDto.name;
  //   updateObj.components = updateFormComponentDto.components;
  //   return updateObj.save();
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} formComponent`;
  // }
}
