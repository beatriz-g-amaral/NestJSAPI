// src/dto/create-todo.input.ts

import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field()
  description: string;
}
