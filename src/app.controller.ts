import { Controller, Get , UseGuards , Request} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login/login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LoginGuard)
  @Get()
  userInfo(@Request() req): string {
    return this.appService.userInfo(req.user);
  }
}
