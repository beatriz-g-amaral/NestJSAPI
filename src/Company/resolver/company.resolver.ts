import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Empresa } from '../entity/company.entity';
import { EmpresaService } from '../service/company.service';
import { CreateEmpresaInput } from '../dto/company.input';

@Resolver(() => Empresa)
export class EmpresaResolver {
  constructor(private readonly empresaService: EmpresaService) {}

  @Query(() => Empresa)
  async empresaByCodigo(@Args('codigo') codigo: string): Promise<Empresa> {
    const result = await this.empresaService.findOneByCode(codigo);
    if (!result) {
      throw new Error(`Could not find Empresa with codigo=${codigo}`);
    }
    return result;
  }

  @Query(() => [Empresa])
  async empresas(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Mutation(() => Empresa)
  async createEmpresa(
    @Args('input') input: CreateEmpresaInput,
  ): Promise<Empresa> {
    return this.empresaService.create(input);
  }

  @Mutation(() => Empresa)
  async deleteEmpresa(@Args('codigo') codigo: string): Promise<Empresa> {
    const empresa = await this.empresaService.findOneByCode(codigo);
    if (!empresa) {
      throw new Error(`Could not find Empresa with codigo=${codigo}`);
    }
    return this.empresaService.delete(codigo);
  }
}
