import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('');
  console.log(
    `NestJS is running and listening and connecting to ${DB_HOST} to port 3000`,
  );
  console.log('');
}

bootstrap();
