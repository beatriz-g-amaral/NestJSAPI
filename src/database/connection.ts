import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ExampleTable } from '../entities/graphql.entity';
import { Todo } from '../entities/todo.entity';
import { TPT140 } from '../Company/entity/company.entity';
import { TPT001 } from '../User/entity/user.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: process.env.DB_HOST,
  port: 1521,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  sid: process.env.DB_SID,
  entities: [Todo, ExampleTable,TPT140,TPT001],
  synchronize: true,
};
