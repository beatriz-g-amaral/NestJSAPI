import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TPT001 } from '../entity/user.entity';
import { TabelaMoedaService } from '../service/user.service';

@Resolver(() => TPT001)
export class TabelaMoedaResolver {
  constructor(private readonly tabelaMoedaService: TabelaMoedaService) {}

  @Query(() => TPT001)
async tabelaLocalByEmpAndLocal(
  @Args('CDCLFMOEDA') CDCLFMOEDA: number,
): Promise<TPT001> {
  const result = await this.tabelaMoedaService.findOneByEmpAndLocal(CDCLFMOEDA);
  if (!result) {
    throw new Error(`Could not find TabelaLocal with CDCLFMOEDA=${CDCLFMOEDA}`);
  }
  return result;
}

  @Query(() => TPT001)
  async tabelaLocais(): Promise<TPT001[]> {
    return this.tabelaMoedaService.findAll()
    };
  }

  //TODO  Fazer o insert e Update
  // @Mutation(() => TabelaLocal)
  // async createTabelaLocal(
  //   @Args('input') input: TabelaLocal
  // ): Promise<TabelaLocal> {
  //   return this.tabelaMoedaService.create(input);
  // }

