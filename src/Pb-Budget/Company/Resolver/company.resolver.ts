// empresas.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Empresas } from '../Entities/company.entity';
import { EmpresasService } from '../Service/company.service';
import { EmpresaInput } from '../dto/create-company.input';

@Resolver(() => Empresas)
export class EmpresasResolver {
  constructor(private empresasService: EmpresasService) {}

  @Query(() => [Empresas])
  async empresas(): Promise<Empresas[]> {
    return this.empresasService.findAll();
  }
  @Mutation(() => Empresas)
  async createEmpresa(
    @Args('empresa', { type: () => EmpresaInput }) empresaInput: EmpresaInput,
  ): Promise<Empresas> {
    return this.empresasService.create(empresaInput);
  }
}
