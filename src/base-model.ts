
import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } })
export class BaseModel {
  @Prop()
  deleted_at: Date;
}
