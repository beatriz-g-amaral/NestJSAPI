import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contas } from './finance.entity';

@Injectable()
export class FinancesService {
  constructor(
    @InjectRepository(Contas)
    private readonly empresaRepository: Repository<Contas>,
  ) {}

  async findOneByCode(local: string): Promise<Contas> {
    const empresa = await this.empresaRepository.findOne({
      where: { local: local },
    });
    return empresa;
  }

  async findAll(): Promise<Contas[]> {
    return this.empresaRepository.find();
  }

  async create(conta: Contas): Promise<Contas> {
    return this.empresaRepository.save(conta);
  }

  async delete(local: string): Promise<Contas> {
    const empresa = await this.empresaRepository.findOne({
      where: { local: local },
    });
    return this.empresaRepository.remove(empresa);
  }
}
