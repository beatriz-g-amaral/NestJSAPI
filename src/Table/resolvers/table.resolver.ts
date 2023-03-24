import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NestJSTable } from '../entitys/table.entity';

@Resolver()
export class TableResolver {
  constructor(
    @InjectRepository(NestJSTable)
    private readonly NestJSTableRepository: Repository<NestJSTable>,
  ) {}

  @Query((returns) => NestJSTable)
  async getNestJSTable(@Args('id') id: number) {
    return await this.NestJSTableRepository.findOne({ where: { id } });
  }

  @Query((returns) => [NestJSTable])
  async getAllNestJSTable() {
    return await this.NestJSTableRepository.find();
  }

  @Mutation((returns) => NestJSTable)
  async createNestJSTable(
    @Args('name') name: string,
    @Args('email') email: string,
  ) {
    const nestJStable = new NestJSTable();
    nestJStable.name = name;
    nestJStable.email = email;
    return await this.NestJSTableRepository.save(nestJStable);
  }
}
