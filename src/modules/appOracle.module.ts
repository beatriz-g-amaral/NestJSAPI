import { GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule, DateScalarMode } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { typeOrmConfigOracle } from '../database/connection';
import { typeOrmConfigSQL } from '../database/connection';
import { CompanyModule } from '../Company/module/company.module';
import { Company } from '../Company/entity/company.entity';
import { UserModule } from '../User/module/user.module';
import { User } from '../User/entity/user.entity';

const dateScalarMode: DateScalarMode = 'timestamp';
let DB_HOST = process.env.DB_HOST;
if ((DB_HOST = 'MYSQL')) {
  let ModuleDatabase = typeOrmConfigOracle;
} else {
  let ModuleDatabase = typeOrmConfigSQL;
}
@Module({
  imports: [
    TypeOrmModule.forRoot(ModuleDatabase), // typeOrmConfigSQL),
    TypeOrmModule.forFeature([Company, User]),
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
  providers: [],
})
export class OracleModule {}
