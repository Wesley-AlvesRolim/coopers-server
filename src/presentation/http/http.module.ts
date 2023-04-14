import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
  controllers: [AuthController],
  imports: [DatabaseModule],
})
export class HttpModule {}
