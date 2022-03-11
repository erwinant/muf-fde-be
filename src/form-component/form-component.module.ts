import { Module } from '@nestjs/common';
import { FormComponentService } from './form-component.service';
import { FormComponentController } from './form-component.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FormComponentSchema } from './entities/form-component.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FormComponent', schema: FormComponentSchema }])],
  controllers: [FormComponentController],
  providers: [FormComponentService],
  exports:[FormComponentService]
})
export class FormComponentModule {}
