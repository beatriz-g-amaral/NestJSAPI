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

  async findOneByEmpAndLocal(cdEmpGrp: number, cdLocal: string): Promise<TabelaLocal> {
    return this.tabelaLocalRepository.findOne({
      where: { CDEMPGRP: cdEmpGrp, CDLOCAL: cdLocal },
    });
  }

  async findAll(cdEmpGrp: number, ): Promise<TabelaLocal[]> {
    return this.tabelaLocalRepository.find({
        where: { CDEMPGRP: cdEmpGrp}});
  }

  async create(tabelaLocal: TabelaLocal): Promise<TabelaLocal> {
    return this.tabelaLocalRepository.save(tabelaLocal);
  }
}
