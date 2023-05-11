import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'empresas' })
export class Empresa {
  @Field()
  @PrimaryGeneratedColumn()
  public id: number;

  @Field()
  @Column({ length: 255 })
  public nome: string;

  @Field()
  @Column({ length: 10, default: 'gen_random_uuid()' })
  public codigo: string;

  @Field()
  @Column({ name: 'situacao_pagamento', length: 20 })
  public situacaoPagamento: string;

  @Field(() => Date)
  @Column({ name: 'data_pagamento' })
  public dataPagamento: Date;

  @Field()
  @Column({ length: 255, nullable: true })
  public servico: string;
}
