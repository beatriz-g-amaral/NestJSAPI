import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { EmpresaService } from '../service/company.service';
import { Empresa } from '../entity/company.entity';

@Controller('company')
export class EmpresaController {
  constructor(private readonly EmpresasService: EmpresaService) {}

  @Get(':id')
  async findOneById(@Param('codigo') codigo: string): Promise<Empresa> {
    return this.EmpresasService.findOneByCode(codigo);
  }

  @Get()
  async findAll(): Promise<Empresa[]> {
    return this.EmpresasService.findAll();
  }

  @Post()
  async create(@Body() empresa: Empresa): Promise<Empresa> {
    return this.EmpresasService.create(empresa);
  }
}
