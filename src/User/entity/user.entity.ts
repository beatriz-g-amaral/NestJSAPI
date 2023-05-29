import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nome_usuario', length: 255 })
  nomeUsuario: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  senha: string;

  @CreateDateColumn({
    name: 'criado_em',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  criadoEm: Date;
}
