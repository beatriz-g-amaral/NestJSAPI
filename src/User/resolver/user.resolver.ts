import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TPT001 } from '../entity/user.entity';
import { TabelaMoedaService } from '../service/user.service';

@Resolver(() => TPT001)
export class TabelaMoedaResolver {
  constructor(private readonly tabelaMoedaService: TabelaMoedaService) {}

  @Query(() => TPT001)
async tabelaMoedaByEmpAndMoeda(
  @Args('CDCLFMOEDA') CDCLFMOEDA: number,
): Promise<TPT001> {
  const result = await this.tabelaMoedaService.findOneByEmpAndMoeda(CDCLFMOEDA);
  if (!result) {
    throw new Error(`Could not find TabelaMoeda with CDCLFMOEDA=${CDCLFMOEDA}`);
  }
  return result;
}

  @Query(() => TPT001)
  async tabelaMoeda(): Promise<TPT001[]> {
    return this.tabelaMoedaService.findAll()
    };
  }

  //TODO  Fazer o insert e Update
  // @Mutation(() => TabelaMoeda)
  // async createTabelaMoeda(
  //   @Args('input') input: TabelaMoeda
  // ): Promise<TabelaMoeda> {
  //   return this.tabelaMoedaService.create(input);
  // }

