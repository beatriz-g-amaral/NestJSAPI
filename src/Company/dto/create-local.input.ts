import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyInput {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
