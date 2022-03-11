import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule,MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { FormComponentModule } from './form-component/form-component.module';
import { UserModule } from './user/user.module';
import { FormComponentController } from './form-component/form-component.controller';

@Module({
  imports: [MongooseModule.forRootAsync({
    imports: [ConfigModule, FormComponentModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) =>
      (
        {
          uri: configService.get("DB_URL"),
          useNewUrlParser: true,
          useUnifiedTopology: true
        } as MongooseModuleAsyncOptions
      )
    }), FormComponentModule, UserModule],
  controllers: [AppController, FormComponentController],
  providers: [AppService],
})
export class AppModule {}
