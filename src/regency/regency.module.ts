import { Module } from '@nestjs/common';
import { RegencyService } from './regency.service';
import { RegencyController } from './regency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Regency, RegencySchema } from './entities/regency.entity';
import { MomentModule } from '@ccmos/nestjs-moment';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Regency.name, schema: RegencySchema }]),
    MomentModule.forRoot({
      tz: 'Asia/Jakarta',
    })
  ],
  controllers: [RegencyController],
  providers: [RegencyService],
  exports:[RegencyService]
})
export class RegencyModule {}
