import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../entity/company.entity';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async findOneByCode(codigo: string): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOne({
      where: { codigo: codigo },
    });
    return empresa;
  }

  async findAll(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  async create(empresa: Empresa): Promise<Empresa> {
    return this.empresaRepository.save(empresa);
  }

  async delete(codigo: string): Promise<Empresa> {
    const empresa = await this.empresaRepository.findOne({
      where: { codigo: codigo },
    });
    return this.empresaRepository.remove(empresa);
  }
}
