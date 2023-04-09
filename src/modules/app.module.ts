import { GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, DateScalarMode } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { typeOrmConfig } from '../database/connection';

import { CompanyModule } from '../Company/module/company.module'
import { TPT140 } from '../Company/entity/company.entity';
import { UserModule } from '../User/module/user.module'
import { TPT001 } from '../User/entity/user.entity';



const dateScalarMode: DateScalarMode = 'timestamp';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([TPT140, TPT001]),
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
    CompanyModule,UserModule,
  ],
  providers: [],
})
export class AppModule {}
