import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Empresas {
  @Field(() => ID)
  id: number;

  @Field()
  nome: string;

  @Field()
  codigo: string;

  @Field()
  situacao_pagamento: string;

  @Field()
  data_pagamento: Date;

  @Field()
  servico: string;
}
