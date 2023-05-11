import { GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, DateScalarMode } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { typeOrmConfig } from '../database/connection.js';

import { Empresas } from 'src/Pb-Budget/Company/Entities/company.entity';
import { EmpresaModule } from 'src/Pb-Budget/Company/Module/company.module';

import { CompanyModule } from '../Integrade/Company/module/company.module';
import { TPT140 } from '../Integrade/Company/entity/company.entity';
import { UserModule } from '../Integrade/User/module/user.module';
import { TPT001 } from '../Integrade/User/entity/user.entity';

const dateScalarMode: DateScalarMode = 'timestamp';
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([TPT140, TPT001, Empresas]),
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
    UserModule,
    EmpresaModule,
  ],
  providers: [],
})
export class AppModule {}
