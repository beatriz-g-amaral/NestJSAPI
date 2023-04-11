import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CompanyService } from '../service/company.service';
import { Company } from '../entity/company.entity';

@Controller('Company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get(':email')
  async findOneByEmpAndLocal(@Param('email') email: string): Promise<Company> {
    return this.companyService.findOneByEmail(email);
  }

  @Get()
  async findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Post()
  async create(@Body() email: Company): Promise<Company> {
    return this.companyService.create(email);
  }
}
