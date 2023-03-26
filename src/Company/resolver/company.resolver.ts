import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TabelaLocal } from '../entity/company.entity';
import { TabelaLocalService } from '../service/company.service';

@Resolver(() => TabelaLocal)
export class TabelaLocalResolver {
  constructor(private readonly tabelaLocalService: TabelaLocalService) {}

  @Query(() => TabelaLocal)
async tabelaLocalByEmpAndLocal(
  @Args('cdEmpGrp') cdEmpGrp: number,
  @Args('cdLocal') cdLocal: string,
): Promise<TabelaLocal> {
  const result = await this.tabelaLocalService.findOneByEmpAndLocal(cdEmpGrp, cdLocal);
  if (!result) {
    throw new Error(`Could not find TabelaLocal with cdEmpGrp=${cdEmpGrp} and cdLocal=${cdLocal}`);
  }
  return result;
}

  @Query(() => TabelaLocal)
  async tabelaLocais(@Args('cdempgrp') cdempgrp: number): Promise<TabelaLocal[]> {
    return this.tabelaLocalService.findAll(cdempgrp);
  }

  //TODO  Fazer o insert e Update
  // @Mutation(() => TabelaLocal)
  // async createTabelaLocal(
  //   @Args('input') input: TabelaLocal
  // ): Promise<TabelaLocal> {
  //   return this.tabelaLocalService.create(input);
  // }
}
