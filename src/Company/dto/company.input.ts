import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmpresaInput {
  @Field()
  id: number;

  @Field()
  nome: string;

  @Field()
  codigo: string;

  @Field()
  situacaoPagamento: string;

  @Field()
  dataPagamento: Date;

  @Field()
  servico: string;
}
