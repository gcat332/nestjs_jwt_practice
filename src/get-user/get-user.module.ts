import { Module } from '@nestjs/common';
import { GetUserController } from './get-user.controller';
import { GetUserService } from './get-user.service';



@Module({
  controllers: [GetUserController],
  providers: [GetUserService]
})
export class GetUserModule {}
