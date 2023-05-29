import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GraphQLModule,
  DateScalarMode,
  GraphQLSchemaBuilderModule,
} from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { typeOrmConfig } from '../database/connection';

import { CompanyModule } from '../Company/module/company.module';
import { FinanceModule } from '../Finances/finance.module';
import { UserModule } from '../User/module/user.module';

import { Empresa } from '../Company/entity/company.entity';

import { Usuario } from '../User/entity/user.entity';
import { AppGateway } from '../WebChat/webchat.gatweay';
const dateScalarMode: DateScalarMode = 'timestamp';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Empresa, Usuario]),
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
    FinanceModule,
    CompanyModule,
    UserModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
