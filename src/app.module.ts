import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule,MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { FormComponentModule } from './form-component/form-component.module';
import { UserModule } from './user/user.module';
import { FormComponentController } from './form-component/form-component.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RegencyModule } from './regency/regency.module';
import { ProvinceModule } from './province/province.module';
import { ProvinceController } from './province/province.controller';
import { RegencyController } from './regency/regency.controller';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule, FormComponentModule, ProvinceModule, RegencyModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        (
          {
            uri: configService.get("DB_URL"),
            useNewUrlParser: true,
            useUnifiedTopology: true
          } as MongooseModuleAsyncOptions
        )
    }),
    ServeStaticModule.forRoot({
      serveRoot: '/.well-known/pki-validation',
      rootPath: join(__dirname, '.well-known/pki-validation'),
    }),
    FormComponentModule,
    UserModule,
    ProvinceModule,
    RegencyModule
  ],
  controllers: [AppController, FormComponentController, ProvinceController, RegencyController],
  providers: [AppService],
})
export class AppModule {}
