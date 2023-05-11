import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  userInfo(user): string {
    return "Welcome! Mr./ Mrs.: "+user.name+"("+user.username+"), user_right : "+user.role+", JWT_issued :"+user.iat+", JWT_expire :"+user.exp;
  }
}
