import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsuarioInput {
  @Field()
  nomeUsuario: string;

  @Field()
  email: string;

  @Field()
  senha: string;
}
