import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TPT001 } from '../entity/user.entity';

@Injectable()
export class TabelaMoedaService {
  constructor(
    @InjectRepository(TPT001)
    private readonly TPT001Repository: Repository<TPT001>,
  ) {}

  async findOneByEmpAndMoeda(CCDCLFMOEDA: number): Promise<TPT001> {
    return this.TPT001Repository.findOne({
      where: {CDCLFMOEDA: CCDCLFMOEDA },
    });
  }

  async findAll(): Promise<TPT001[]> {
    const locais = await this.TPT001Repository.find();
  
    return locais;
  }
  
  async create(tabelaMoeda: TPT001): Promise<TPT001> {
    return this.TPT001Repository.save(tabelaMoeda);
  }
}
