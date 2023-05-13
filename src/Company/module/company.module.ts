import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../entity/company.entity';
import { EmpresaResolver } from '../resolver/company.resolver';
import { EmpresaService } from '../service/company.service';
import { EmpresaController } from '../controller/company.controller';
import { FileController } from '../controller/file.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresaController, FileController],
  providers: [EmpresaService, EmpresaResolver],
})
export class CompanyModule {}
