/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GraphQLModule,
  DateScalarMode,
  GraphQLSchemaBuilderModule,
} from '@nestjs/graphql';
import { join } from 'path';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApolloDriver } from '@nestjs/apollo';
import { typeOrmConfig } from '../database/connection';

import { CompanyModule } from '../Company/module/company.module';
import { Empresa } from '../Company/entity/company.entity';
import { UserModule } from '../User/module/user.module';
import { TPT001 } from '../User/entity/user.entity';
import { AppGateway } from '../WebChat/webchat.gatweay';
const dateScalarMode: DateScalarMode = 'timestamp';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Empresa, TPT001]),
    MulterModule.register({
      dest: 'uploads', // Diretório onde os arquivos serão armazenados
    }),
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
  ],
  providers: [AppGateway],
})
export class AppModule {}
