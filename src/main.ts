import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import * as cors from 'cors';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Configurar o limite de carga
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ limit: '10mb', extended: true }));
  // Enable CORS for requests from localhost
  app.use(
    cors({
      origin: 'http://localhost:8080',
    }),
  );

  await app.listen(3000);
}
bootstrap();
