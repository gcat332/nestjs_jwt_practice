import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserService } from 'src/get-user/get-user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService {
    constructor(private getUserService: GetUserService,
        private jwtService: JwtService) {}
    
    async signIn(username: string, password: string): Promise<any> {
      const user = await this.getUserService.findOne(username);
      if (!user || user.password !== password) {
        throw new UnauthorizedException();
      }
      const payload = { username: user.username, name: user.name, role : user.role };
      const access_token =  await this.jwtService.signAsync(payload)
    return {
      Name:user.name,Username:user.username,Role:user.role,Access_token:access_token 
    };
    }
}
