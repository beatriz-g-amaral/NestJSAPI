import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabelaLocal } from '../entity/company.entity';

@Injectable()
export class TabelaLocalService {
  constructor(
    @InjectRepository(TabelaLocal)
    private readonly tabelaLocalRepository: Repository<TabelaLocal>,
  ) {}

  async findOneByEmpAndLocal(CDEMPGRP: number, cdLocal: string): Promise<TabelaLocal> {
    return this.tabelaLocalRepository.findOne({
      where: { CDEMPGRP: CDEMPGRP, CDLOCAL: cdLocal },
    });
  }

  async findAll(CDEMPGRP: number): Promise<TabelaLocal[]> {
    const locais = await this.tabelaLocalRepository.find({
      where: { CDEMPGRP: CDEMPGRP },
    });
  
    return locais;
  }
  
  async create(tabelaLocal: TabelaLocal): Promise<TabelaLocal> {
    return this.tabelaLocalRepository.save(tabelaLocal);
  }
}
