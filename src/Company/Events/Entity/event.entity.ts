import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Eventos {
  @PrimaryGeneratedColumn()
  evento_id: number;

  @Column({ length: 50, unique: true })
  nome_evento: string;

  @Column({ length: 50 })
  data_evento: string;

  @Column({ nullable: true })
  imagem: string;

  @Column({ type: 'timestamp' })
  data_cadastrada: Date;

  @Column({ length: 255 })
  criado_por: string;
}
