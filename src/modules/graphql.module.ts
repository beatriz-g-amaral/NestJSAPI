import { GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, DateScalarMode } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { AppResolver } from '../Resolvers/graphql.resolver';
import { ExampleTable } from '../entities/graphql.entity';
import { typeOrmConfig } from '../database/connection';

import { CompanyModule } from '../Company/module/company.module'
import { TabelaLocal } from '../Company/entity/company.entity';
import { Todo } from '../entities/todo.entity';
import { TodoService } from '../services/todo.service';
import { TodoResolver } from '../resolvers/todo.resolver';
import { TabelaLocalResolver } from '../Company/resolver/company.resolver';
import { TabelaLocalService } from '../Company/service/company.service';


const dateScalarMode: DateScalarMode = 'timestamp';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ExampleTable, Todo, TabelaLocal]),
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
    CompanyModule,
  ],
  providers: [AppResolver, TodoService, TodoResolver],
})
export class GraphQlModule {}
