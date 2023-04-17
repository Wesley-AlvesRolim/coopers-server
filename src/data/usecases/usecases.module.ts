import { Module } from '@nestjs/common';
import {
  CreateTaskUsecaseType,
  DeleteTaskUsecaseType,
  ReadAllTaskUsecaseType,
  UpdateTaskUsecaseType,
} from 'src/domain/usecases';
import {
  CreateTaskUsecase,
  DeleteTaskUsecase,
  ReadAllTaskUsecase,
  UpdateTaskUsecase,
} from '.';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [
    {
      provide: CreateTaskUsecaseType,
      useClass: CreateTaskUsecase,
    },
    {
      provide: DeleteTaskUsecaseType,
      useClass: DeleteTaskUsecase,
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
      provide: DeleteTaskUsecaseType,
      useClass: DeleteTaskUsecase,
    },
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
export class UsecasesModule {}
