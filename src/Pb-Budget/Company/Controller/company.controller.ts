// empresas.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { Empresa } from '../Entities/company.entity';
import { EmpresasService } from '../Service/company.service';

@Controller('empresas')
export class EmpresasController {
  constructor(private empresasService: EmpresasService) {}

  @Get()
  async findAll(): Promise<Empresa[]> {
    return this.empresasService.findAll();
  }

  @Post()
  async create(@Body() empresa: Empresa): Promise<Empresa> {
    return this.empresasService.create(empresa);
  }
}
