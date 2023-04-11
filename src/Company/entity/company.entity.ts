import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'TPT140' })
export class TPT140 {
  @Field()
  @PrimaryColumn({ name: 'CDFILIAL' })
  public CDFILIAL: number;

  @Field()
  @PrimaryColumn({ name: 'CDLOCAL' })
  public CDLOCAL: string;

  @Field()
  @Column({ name: 'DSLOCAL', nullable: true })
  public DSLOCAL: string;

  @Field()
  @Column({ name: 'NRNIVELLOC' })
  public NRNIVELLOC: number;

  @Field()
  @Column({ name: 'STACLANCTO', default: 'N' })
  public STACLANCTO: string;

  @Field()
  @Column({ name: 'STATIVO', default: 'S' })
  public STATIVO: string;

  @Field(() => Date)
  @Column({ name: 'DTGRV', default: () => 'CURRENT_TIMESTAMP' })
  DTGRV: Date;

  @Field(() => Date)
  @Column({ name: 'DTATLZ', default: () => 'CURRENT_TIMESTAMP' })
  DTATLZ: Date;

  @Field()
  @Column({ name: 'FOTOLOCAL1', nullable: true })
  public FOTOLOCAL1: string;

  @Field()
  @Column({ name: 'FOTOLOCAL2', nullable: true })
  public FOTOLOCAL2: string;

  @Field()
  @Column({ name: 'FOTOLOCAL3', nullable: true })
  public FOTOLOCAL3: string;
}
