import { Module } from '@nestjs/common';
import { CreateTaskUsecaseType } from 'src/domain/usecases';
import { CreateTaskUsecase } from '.';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  providers: [
    {
      provide: CreateTaskUsecaseType,
      useClass: CreateTaskUsecase,
    },
  ],
  imports: [DatabaseModule],
  exports: [
    {
      provide: CreateTaskUsecaseType,
      useClass: CreateTaskUsecase,
    },
  ],
})
export class UsecasesMoudule {}
