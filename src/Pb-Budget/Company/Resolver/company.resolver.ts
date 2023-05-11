// empresas.service.ts

import { Injectable } from '@nestjs/common';
import { Empresa } from '../Entities/company.entity';

@Injectable()
export class EmpresasService {
  private empresas: Empresa[] = [];
zA
  findAll(): Promise<Empresa[]> {
    return Promise.resolve(this.empresas);
  }

  create(empresa: Empresa): Promise<Empresa> {
    const newEmpresa: Empresa = { ...empresa, id: this.generateId() };
    this.empresas.push(newEmpresa);
    return Promise.resolve(newEmpresa);
  }

  private generateId(): number {
    const lastId = this.empresas.length > 0 ? this.empresas[this.empresas.length - 1].id : 0;
    return lastId + 1;
  }
}
