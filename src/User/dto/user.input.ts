import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
    @Field()  
    CDCLFMOEDA: number;
  
    @Field()
    DSCLFMOEDA: string;
  
    @Field ()
    DTGRV: Date;
  
    @Field()
    DTATLZ: Date;
}
