import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TabelaLocalService } from '../service/company.service';
import { TPT140 } from '../entity/company.entity';

@Controller('Company')
export class TabelaLocalController {
  constructor(private readonly tabelaLocalService: TabelaLocalService) {}

  @Get(':cdLocal')
  async findOneByEmpAndLocal(@Param('cdLocal') cdLocal: string): Promise<TPT140> {
    return this.tabelaLocalService.findOneByEmpAndLocal(cdLocal);
  }

  @Get()
  async findAll(): Promise<TPT140[]> {
    return this.tabelaLocalService.findAll();
  }

  @Post()
  async create(@Body() tabelaLocal: TPT140): Promise<TPT140> {
    return this.tabelaLocalService.create(tabelaLocal);
  }
}
