import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ExampleTable } from '../entities/graphql.entity';

@Resolver()
export class AppResolver {
  constructor(
    @InjectRepository(ExampleTable)
    private readonly ExampleTableRepository: Repository<ExampleTable>,
  ) {}

  @Query((returns) => ExampleTable)
  async getExampleTable(@Args('id') id: number) {
    return await this.ExampleTableRepository.findOne({ where: { id } });
  }

  @Query((returns) => [ExampleTable])
  async getAllExampleTable() {
    return await this.ExampleTableRepository.find();
  }

  @Mutation((returns) => ExampleTable)
  async createExampleTable(
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    const exampleTable = new ExampleTable();
    exampleTable.name = name;
    exampleTable.email = email;
    return await this.ExampleTableRepository.save(exampleTable);
  }
}
