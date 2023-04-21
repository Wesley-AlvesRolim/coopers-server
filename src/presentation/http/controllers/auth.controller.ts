import {
  Body,
  Controller,
  ForbiddenException,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { User } from 'src/domain/entities';
import { UserRepository } from 'src/domain/repositories';

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
      throw new NotFoundException('User not found');
    }
    if (user.password !== password) {
      throw new ForbiddenException('Invalid Credential');
    }
    delete user.password;
    return user;
  }

  @Post('/register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<void> {
    try {
      await this.userRepository.create(username, password);
    } catch (error) {
      throw new ForbiddenException('User already exists');
    }
  }
}
