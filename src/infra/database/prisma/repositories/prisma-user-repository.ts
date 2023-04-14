import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/user';
import { UserRepository } from 'src/domain/repositories/user-respository';
import { PrismaDatabaseService } from '../prisma-database.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaDatabaseService) {}

  async getByUsername(username: string): Promise<User> {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: {
        username,
      },
    });
    return user;
  }
}
