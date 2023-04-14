import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaDatabaseService } from 'src/infra/database/prisma/prisma-database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaDatabaseService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(3001);
}
bootstrap();
