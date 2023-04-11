import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: process.env.DB_HOST,
  port: 1521,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  sid: process.env.DB_SID,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/'],
  synchronize: false,
};
