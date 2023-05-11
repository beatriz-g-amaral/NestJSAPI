// empresas.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { Empresas } from '../Entities/company.entity';
import { EmpresasService } from '../Service/company.service';

@Controller('empresas')
export class EmpresasController {
  constructor(private empresasService: EmpresasService) {}

  @Get()
  async findAll(): Promise<Empresas[]> {
    return this.empresasService.findAll();
  }

  @Post()
  async create(@Body() empresa: Empresas): Promise<Empresas> {
    return this.empresasService.create(empresa);
  }
}
