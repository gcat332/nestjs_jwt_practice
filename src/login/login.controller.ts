import { Controller,Post,Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
 constructor(private readonly loginService: LoginService) {}

    @Post()
    signIn(@Body() signInDto: Record<string, any>) {
        return this.loginService.signIn(signInDto.username, signInDto.password);
      }
}
