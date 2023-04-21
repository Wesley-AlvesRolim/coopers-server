import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaDatabaseService } from 'src/infra/database/prisma/prisma-database.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaDatabaseService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
