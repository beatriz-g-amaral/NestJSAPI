import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'NestJSTable'})
export class ExampleTable {
  @Field(() => Int)
  @PrimaryGeneratedColumn( {name: 'id'})
  public id: number;

  @Field()
  @Column({name: 'name'})
  public name: string;

  @Field()
  @Column({name: 'email'})
  public email: string;
}
