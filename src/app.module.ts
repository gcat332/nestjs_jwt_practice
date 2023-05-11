import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetUserModule } from './get-user/get-user.module';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
const dotenv = require('dotenv');
dotenv.config();


@Module({
  imports: [ GetUserModule, LoginModule, MongooseModule.forRoot(process.env.DB_HOST)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
