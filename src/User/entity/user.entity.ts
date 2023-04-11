import { Entity, Column, PrimaryColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'TPT001' })
export class TPT001 {
  @Field(() => Int)
  @PrimaryColumn({ name: 'CDCLFMOEDA' })
  public CDCLFMOEDA: number;

  @Field()
  @Column({ name: 'DSCLFMOEDA' })
  public DSCLFMOEDA: string;

  @Field(() => Date)
  @Column({ name: 'DTGRV', default: () => 'CURRENT_TIMESTAMP' })
  DTGRV: Date;

  @Field(() => Date)
  @Column({ name: 'DTATLZ', default: () => 'CURRENT_TIMESTAMP' })
  DTATLZ: Date;
}
