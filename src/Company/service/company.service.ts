import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TPT140 } from '../entity/company.entity';

@Injectable()
export class TabelaLocalService {
  constructor(
    @InjectRepository(TPT140)
    private readonly TPT140Repository: Repository<TPT140>,
  ) {}

  async findOneByEmpAndLocal(cdLocal: string): Promise<TPT140> {
    return this.TPT140Repository.findOne({
      where: {CDLOCAL: cdLocal },
    });
  }

  async findAll(): Promise<TPT140[]> {
    const locais = await this.TPT140Repository.find();
  
    return locais;
  }
  
  async create(tabelaLocal: TPT140): Promise<TPT140> {
    return this.TPT140Repository.save(tabelaLocal);
  }
}
