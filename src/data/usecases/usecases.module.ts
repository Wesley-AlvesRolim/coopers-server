import { Module } from '@nestjs/common';
import {
  CreateTaskUsecaseType,
  ReadAllTaskUsecaseType,
} from 'src/domain/usecases';
import { CreateTaskUsecase, ReadAllTaskUsecase } from '.';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [
    {
      provide: CreateTaskUsecaseType,
      useClass: CreateTaskUsecase,
    },
    {
      provide: ReadAllTaskUsecaseType,
      useClass: ReadAllTaskUsecase,
    },
  ],
  imports: [DatabaseModule],
  exports: [
    {
      provide: CreateTaskUsecaseType,
      useClass: CreateTaskUsecase,
    },
    {
      provide: ReadAllTaskUsecaseType,
      useClass: ReadAllTaskUsecase,
    },
  ],
})
export class UsecasesMoudule {}
