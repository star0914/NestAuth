import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
  }

  async ValidateUser(username: string, pass: string): Promise<any> { // TODO change password using bcript
    const user = await  this.usersService.findOne(username);
    if (user && user.password === pass){
      const { password, result} = user;
      return result;
    }
    return null;
  }
}
