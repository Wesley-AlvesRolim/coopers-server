import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UserRepository } from 'src/domain/repositories/user-respository';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post('/login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    let user: User;
    try {
      user = await this.userRepository.getByUsername(username);
    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (user.password !== password) {
      throw new HttpException('Invalid Credential', HttpStatus.FORBIDDEN);
    }
    return user;
  }
}
