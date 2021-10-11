import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 5000;
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  Logger.log(`Application running on port ${PORT}`);
}
bootstrap();
