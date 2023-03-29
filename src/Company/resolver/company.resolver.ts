import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TPT140 } from '../entity/company.entity';
import { TabelaLocalService } from '../service/company.service';

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
    return this.tabelaLocalService.findAll()
    };
  }

  //TODO  Fazer o insert e Update
  // @Mutation(() => TabelaLocal)
  // async createTabelaLocal(
  //   @Args('input') input: TabelaLocal
  // ): Promise<TabelaLocal> {
  //   return this.tabelaLocalService.create(input);
  // }

