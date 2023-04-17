import { Module } from '@nestjs/common';
import {
  CreateTaskUsecaseType,
  ReadAllTaskUsecaseType,
  UpdateTaskUsecaseType,
} from 'src/domain/usecases';
import { CreateTaskUsecase, ReadAllTaskUsecase, UpdateTaskUsecase } from '.';
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
    {
      provide: UpdateTaskUsecaseType,
      useClass: UpdateTaskUsecase,
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
    {
      provide: UpdateTaskUsecaseType,
      useClass: UpdateTaskUsecase,
    },
  ],
})
export class UsecasesMoudule {}
