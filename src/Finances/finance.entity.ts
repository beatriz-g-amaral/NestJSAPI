import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  local: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column({ type: 'date' })
  vencimento: Date;
}
