import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { GetUserModule } from 'src/get-user/get-user.module';
import { JwtModule } from '@nestjs/jwt';
import { GetUserService } from 'src/get-user/get-user.service';
import { LoginGuard } from './login.guard';

const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [GetUserModule, 
    JwtModule.register({
    global: true,
    secret: process.env.ACCESS_TOKEN_SECRET,
    signOptions: { expiresIn: '60s' },
  }),
],
  controllers: [LoginController],
  providers: [LoginService, GetUserService, LoginGuard]
})
export class LoginModule {}
