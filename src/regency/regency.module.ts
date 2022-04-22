import { Module } from '@nestjs/common';
import { RegencyService } from './regency.service';
import { RegencyController } from './regency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RegencySchema } from './entities/regency.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Regency', schema: RegencySchema }])],
  controllers: [RegencyController],
  providers: [RegencyService],
  exports:[RegencyService]
})
export class RegencyModule {}
