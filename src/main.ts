import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database/connection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  try {
    await TypeOrmModule.forRoot(typeOrmConfig);
    console.log('Database connection established successfully');
  } catch (error) {
    console.log(`Error connecting to database: ${error.message}`);
  }

  await app.listen(3333);
}

bootstrap();
