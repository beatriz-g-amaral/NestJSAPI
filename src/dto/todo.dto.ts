import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoDto {
  @Field(() => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  completed: boolean;
}
