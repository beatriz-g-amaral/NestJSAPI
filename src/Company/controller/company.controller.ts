import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { EmpresaService } from '../service/company.service';
import { Empresa } from '../entity/company.entity';

@Controller('company')
export class EmpresaController {
  constructor(private readonly empresasService: EmpresaService) {}

  @Get(':codigo')
  async findOneByCodigo(@Param('codigo') codigo: string): Promise<Empresa> {
    return this.empresasService.findOneByCode(codigo);
  }

  @Get()
  async findAll(): Promise<Empresa[]> {
    return this.empresasService.findAll();
  }

  @Post()
  async create(@Body() empresa: Empresa): Promise<Empresa> {
    return this.empresasService.create(empresa);
  }

  @Delete(':codigo')
  async deleteByCodigo(@Param('codigo') codigo: string): Promise<Empresa> {
    const empresa = await this.empresasService.findOneByCode(codigo);
    if (!empresa) {
      throw new Error(`Could not find Empresa with codigo=${codigo}`);
    }
    return this.empresasService.delete(codigo);
  }
}
