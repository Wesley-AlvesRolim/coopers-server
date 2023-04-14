import { Module } from '@nestjs/common';
import { PrismaDatabaseService } from './prisma/prisma-database.service';
import { UserRepository } from 'src/domain/repositories/user-respository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user-repository';

@Module({
  providers: [
    PrismaDatabaseService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
})
export class DatabaseModule {}
