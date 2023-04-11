import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';
import { UserInput } from '../dto/user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async findbyEmail(@Args('email') email: string): Promise<User> {
    const result = await this.userService.findOneByEmail(email);
    if (!result) {
      throw new Error(`Could not find User with email=${email}`);
    }
    return result;
  }

  @Query(() => User)
  async tabelaMoeda(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  async createTabelaMoeda(@Args('input') input: UserInput): Promise<User> {
    return this.userService.create(input);
  }
}
