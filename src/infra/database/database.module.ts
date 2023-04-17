import { Module } from '@nestjs/common';
import { PrismaDatabaseService } from './prisma/prisma-database.service';
import { TasksRepository, UserRepository } from 'src/domain/repositories';
import {
  PrismaTaskRepository,
  PrismaUserRepository,
} from './prisma/repositories';

@Module({
  providers: [
    PrismaDatabaseService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: TasksRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: TasksRepository,
      useClass: PrismaTaskRepository,
    },
  ],
})
export class DatabaseModule {}
