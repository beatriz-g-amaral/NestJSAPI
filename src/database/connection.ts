import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfigOracle: TypeOrmModuleOptions = {
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

export const typeOrmConfigSQL: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/'],
  synchronize: false,
};
