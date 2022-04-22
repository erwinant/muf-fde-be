import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceController } from './province.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvinceSchema } from './entities/province.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Province', schema: ProvinceSchema }])],
  controllers: [ProvinceController],
  providers: [ProvinceService],
  exports:[ProvinceService]
})
export class ProvinceModule {}
