
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ReshapingOptions } from 'src/helper/ReshapingOptions';

export type ProvinceDocument = Province & Document;

@Schema({ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } })
export class Province {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  code: string;

  @Prop()
  deleted_at: Date;
}

const schema = SchemaFactory.createForClass(Province);
schema.set('toJSON', ReshapingOptions);
schema.virtual('regencies', {
    ref: 'Regency',
    localField: 'code',
    foreignField: 'province_code'
});

export const ProvinceSchema = schema;