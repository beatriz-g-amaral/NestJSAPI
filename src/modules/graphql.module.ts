import { GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, DateScalarMode } from '@nestjs/graphql';
import { join } from 'path';
import * as Oracledb from 'oracledb';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from '../Resolvers/graphql.resolver';
import { ExampleTable } from '../Entitys/graphql.entity';
import { Todo } from '../Entitys/todo.entity';
import { TodoService } from '../services/todo.service';
import { TodoResolver } from '../resolvers/todo.resolver';



const dateScalarMode: DateScalarMode = 'timestamp';
require('dotenv').config(); // carrega as variáveis de ambiente definidas no arquivo .env
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.DB_HOST,
      port: 1521,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      sid: process.env.DB_SID,
      entities: [Todo,ExampleTable],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ExampleTable, Todo]),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        buildSchemaOptions: {
          dateScalarMode,
        },
        driver: new GraphQLSchemaBuilderModule(),
      }),
    }),
  ],
  providers: [AppResolver, TodoService, TodoResolver],
})
export class GraphQlModule {}
