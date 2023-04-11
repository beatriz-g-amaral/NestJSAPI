import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entity/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly CompanyRepository: Repository<Company>,
  ) {}

  async findOneByEmail(email: string): Promise<Company> {
    return this.CompanyRepository.findOne({
      where: { email: email },
    });
  }

  async findAll(): Promise<Company[]> {
    const locais = await this.CompanyRepository.find();

    return locais;
  }

  async create(tabelaLocal: Company): Promise<Company> {
    return this.CompanyRepository.save(tabelaLocal);
  }
}
