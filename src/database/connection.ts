import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'oracle',
  host: process.env.DB_HOST,
  port: 1521,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  sid: process.env.DB_SID,
  entities: ["dist/**/*.entity.js"],
  migrations: ["src/migrations/"],
  synchronize: false,
};

// TODO: Ver se realmente algo aqui pode ser aproveitado e se nao precisar capar fora
// import { ExampleTable } from '../entities/graphql.entity';
// import { Todo } from '../entities/todo.entity';
// import { TPT140 } from '../Company/entity/company.entity';
// import { TPT001 } from '../User/entity/user.entity';
// // type: 'oracle',
//   // host: process.env.DB_HOST,
//   // port: 1521,
//   // username: process.env.DB_USERNAME,
//   // password: process.env.DB_PASSWORD,
//   // database: process.env.DB_DATABASE,
//   // sid: process.env.DB_SID,
//   // entities: [Todo, ExampleTable,TPT140,TPT001],
//   // synchronize: true,