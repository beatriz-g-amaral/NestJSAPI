import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for requests from localhost
  app.use(
    cors({
      origin: 'http://localhost:8080',
    }),
  );

  await app.listen(3000);
}
bootstrap();
