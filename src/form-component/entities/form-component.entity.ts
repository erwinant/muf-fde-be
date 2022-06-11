
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from 'src/base-model';

export type FormComponentDocument = FormComponent & Document;

export class Validation {
    name: string;
    pattern?:string;
    error_message?:string;
}

export class OptionMember {
    name: string;
    label:string;
    value:string;
}

export class Component {
  name: string;
  label: string;
  validation?:Validation[];
  type: string;
  default_size?:number;
  default_value?: string;
  options?:OptionMember[];
}

@Schema({})
export class FormComponent extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  submitable: boolean;

  @Prop({ required: true })
  title: string;

  @Prop([Component])
  components: Component[];
}


export const FormComponentSchema = SchemaFactory.createForClass(FormComponent);