import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsecasesMoudule } from 'src/data/usecases/usecases.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { HttpModule } from 'src/presentation/http/http.module';

@Module({
  imports: [
    HttpModule,
    UsecasesMoudule,
    DatabaseModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
