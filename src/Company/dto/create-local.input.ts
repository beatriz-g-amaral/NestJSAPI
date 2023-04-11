import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateLocalInput {
  @Field()
  CDFILIAL: number;

  @Field()
  CDLOCAL: string;

  @Field({ nullable: true })
  DSLOCAL: string;

  @Field()
  NRNIVELLOC: number;

  @Field()
  STACLANCTO: string;

  @Field()
  STATIVO: string;

  @Field()
  DTGRV: Date;

  @Field()
  DTATLZ: Date;

  @Field({ nullable: true })
  FOTOLOCAL1: string;

  @Field({ nullable: true })
  FOTOLOCAL2: string;

  @Field({ nullable: true })
  FOTOLOCAL3: string;
}
