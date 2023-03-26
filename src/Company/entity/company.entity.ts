import { Entity, Column, PrimaryColumn } from 'typeorm';
import { DateScalarMode, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'TPT140'})
export class TabelaLocal {

  
  @Field()
  @PrimaryColumn({name: 'CDEMPGRP'})
  public CDEMPGRP: number;
    
  @Field()
  @Column({name: 'CDFILIAL'})
  public CDFILIAL: string;
  
  @Field()
  @Column({name: 'CDLOCAL'})
  public CDLOCAL: string;

  @Field()
  @Column({name: 'DSLOCAL'})
  public DSLOCAL: string;

  @Field()
  @Column({name: 'NRNIVELLOC'})
  public NRNIVELLOC: number;

  @Field()
  @Column({name: 'STACLANCTO', default: 'N'})
  public STACLANCTO: string;

  @Field()
  @Column({name: 'STATIVO', default: 'S'})
  public STATIVO: string;
  
  @Field()
  @Column({ name: 'DTGRV', default: () => 'CURRENT_TIMESTAMP' })
  DTGRV: Date;

  @Field()
  @Column({ name: 'DTATLZ', default: () => 'CURRENT_TIMESTAMP' })
  DTATLZ: Date;
  
  @Field()
  @Column({name: 'FOTOLOCAL1',})
  public FOTOLOCAL1: string;

  @Field()
  @Column({name: 'FOTOLOCAL2',})
  public FOTOLOCAL2: string;

  @Field()
  @Column({name: 'FOTOLOCAL3',})
  public FOTOLOCAL3: string;
  

  
}
