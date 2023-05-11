import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TPT140 } from '../entity/company.entity';
import { TabelaLocalService } from '../service/company.service';
import { CreateLocalInput } from '../dto/create-local.input';

@Resolver(() => TPT140)
export class TabelaLocalResolver {
  constructor(private readonly tabelaLocalService: TabelaLocalService) {}

  @Query(() => TPT140)
  async tabelaLocalByEmpAndLocal(
    @Args('CDLOCAL') CDLOCAL: string,
  ): Promise<TPT140> {
    const result = await this.tabelaLocalService.findOneByEmpAndLocal(CDLOCAL);
    if (!result) {
      throw new Error(`Could not find TabelaLocal with CDLOCAL=${CDLOCAL}`);
    }
    return result;
  }

  @Query(() => TPT140)
  async tabelaLocais(): Promise<TPT140[]> {
    return this.tabelaLocalService.findAll();
  }

  @Mutation(() => TPT140)
  async createTabelaLocal(
    @Args('input') input: CreateLocalInput,
  ): Promise<TPT140> {
    return this.tabelaLocalService.create(input);
  }
}
