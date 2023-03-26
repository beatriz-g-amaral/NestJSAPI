import { Module } from '@nestjs/common';
import { GraphQlModule } from './graphql.module'


@Module({
  imports: [GraphQlModule],
})
export class AppModule {}
