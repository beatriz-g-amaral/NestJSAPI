// empresas.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nome: string;

  @Column({ length: 10, default: () => 'gen_random_uuid()' })
  codigo: string;

  @Column({ length: 20 })
  situacao_pagamento: string;

  @Column()
  data_pagamento: Date;

  @Column({ length: 255 })
  servico: string;
}
