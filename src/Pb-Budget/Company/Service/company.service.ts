import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresas } from '../Entities/company.entity';
import { EmpresaInput } from '../dto/create-company.input';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(Empresas)
    private readonly empresasRepository: Repository<Empresas>,
  ) {}

  findAll(): Promise<Empresas[]> {
    return this.empresasRepository.find();
  }

  create(empresaInput: EmpresaInput): Promise<Empresas> {
    const newEmpresa: Empresas = this.empresasRepository.create(empresaInput);
    return this.empresasRepository.save(newEmpresa);
  }
}
