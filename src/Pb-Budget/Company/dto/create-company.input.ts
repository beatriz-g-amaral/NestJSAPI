import { InputType, Field } from '@nestjs/graphql';

@InputType() // Adiciona o decorador InputType
export class EmpresaInput {
  @Field() // Adiciona o decorador Field
  nome: string;

  @Field() // Adiciona o decorador Field
  codigo: string;

  @Field() // Adiciona o decorador Field
  situacao_pagamento: string;

  @Field() // Adiciona o decorador Field
  data_pagamento: Date;

  @Field() // Adiciona o decorador Field
  servico: string;
}
