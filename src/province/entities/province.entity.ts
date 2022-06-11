
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseModel } from 'src/base-model';
import { ReshapingOptions } from 'src/helper/ReshapingOptions';

export type ProvinceDocument = Province & Document;

@Schema({})
export class Province extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

}

const schema = SchemaFactory.createForClass(Province);
schema.set('toJSON', ReshapingOptions);
schema.virtual('regencies', {
    ref: 'Regency',
    localField: 'code',
    foreignField: 'province_code'
});

export const ProvinceSchema = schema;