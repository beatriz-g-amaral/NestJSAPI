import { Module } from '@nestjs/common';
import { GraphQlModule } from '../GraphQl/modules/graphql.module'

@Module({
  imports: [GraphQlModule],
})
export class AppModule {}
