import { GraphQLSchemaBuilderModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { GraphQlModule } from '../GraphQl/modules/graphql.module'
import { AppResolver } from '../GraphQL/Resolvers/graphql.resolver';




@Module({
  imports: [GraphQlModule],
})
export class AppModule {}
