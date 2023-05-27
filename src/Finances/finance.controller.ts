import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FinancesService } from './finance.service';
import { Contas } from './finance.entity';

@Controller('finances')
export class FinancesController {
  constructor(private readonly financeservice: FinancesService) {}

  @Get(':codigo')
  async findOneByCodigo(@Param('codigo') codigo: string): Promise<Contas> {
    return this.financeservice.findOneByCode(codigo);
  }

  @Get()
  async findAll(): Promise<Contas[]> {
    return this.financeservice.findAll();
  }

  @Post()
  async create(@Body() Contas: Contas): Promise<Contas> {
    return this.financeservice.create(Contas);
  }

  @Delete(':codigo')
  async deleteByCodigo(@Param('codigo') codigo: string): Promise<Contas> {
    const Contas = await this.financeservice.findOneByCode(codigo);
    if (!Contas) {
      throw new Error(`Could not find Contas with codigo=${codigo}`);
    }
    return this.financeservice.delete(codigo);
  }
}
