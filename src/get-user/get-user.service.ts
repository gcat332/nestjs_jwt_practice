import { Injectable } from '@nestjs/common';
const userList = require('./models/user.schema')

@Injectable()
export class GetUserService {

  async findOne(usernameId: string): Promise<any> {
    const getUser =  await userList.find({username: usernameId})
    return getUser[0];
  }
}