import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { tpt140 } from '../entity/company.entity';
import { TabelaLocalService } from '../service/company.service';

@Resolver(() => tpt140)
export class TabelaLocalResolver {
  constructor(private readonly tabelaLocalService: TabelaLocalService) {}

  @Query(() => tpt140)
async tabelaLocalByEmpAndLocal(
  @Args('CDEMPGRP') CDEMPGRP: number,
  @Args('CDLOCAL') CDLOCAL: string,
): Promise<tpt140> {
  const result = await this.tabelaLocalService.findOneByEmpAndLocal(CDEMPGRP, CDLOCAL);
  if (!result) {
    throw new Error(`Could not find TabelaLocal with CDEMPGRP=${CDEMPGRP} and CDLOCAL=${CDLOCAL}`);
  }
  return result;
}

  @Query(() => tpt140)
  async tabelaLocais(@Args('CDEMPGRP') CDEMPGRP: number): Promise<tpt140[]> {
    return this.tabelaLocalService.findAll(CDEMPGRP)
    };
  }

  //TODO  Fazer o insert e Update
  // @Mutation(() => TabelaLocal)
  // async createTabelaLocal(
  //   @Args('input') input: TabelaLocal
  // ): Promise<TabelaLocal> {
  //   return this.tabelaLocalService.create(input);
  // }

