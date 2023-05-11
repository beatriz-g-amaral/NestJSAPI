import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpresasResolver } from '../resolver/company.resolver';
import { Empresas } from '../Entities/company.entity';
import { EmpresasService } from '../Service/company.service';
import { EmpresasController } from '../controller/company.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Empresas])],
  controllers: [EmpresasController],
  providers: [EmpresasService, EmpresasResolver],
})
export class EmpresaModule {}
