import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config(); // Carrega as variáveis de ambiente do arquivo .env

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/'],
  synchronize: false,
};
