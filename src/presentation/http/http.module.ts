import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UserTaskController } from './controllers/tasks.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UsecasesModule } from 'src/data/usecases/usecases.module';

@Module({
  controllers: [AuthController, UserTaskController],
  imports: [DatabaseModule, UsecasesModule],
})
export class HttpModule {}
