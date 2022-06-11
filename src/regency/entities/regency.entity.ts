
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { BaseModel } from 'src/base-model';
import { ReshapingOptions } from 'src/helper/ReshapingOptions';
import { Province } from 'src/province/entities/province.entity';

export type RegencyDocument = Regency & Document;

@Schema({})
export class Regency extends BaseModel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  province_code: string;

  @Prop()
  deleted_at: Date;

}
const schema = SchemaFactory.createForClass(Regency);
schema.set('toJSON', ReshapingOptions);
schema.virtual('province', {
    ref: Province.name,
    localField: 'province_code',
    foreignField: 'code',
    justOne:true
});


export const RegencySchema = schema;