import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../entity/company.entity';
import { EmpresaResolver } from '../resolver/company.resolver';
import { EmpresaService } from '../service/company.service';
import { EmpresaController } from '../controller/company.controller';
import { FileController } from '../controller/file.controller';
import { EventosService } from '../Events/Services/event.service';
import { Eventos } from '../Events/Entity/event.entity';
import { EventoController } from 'src/Company/Events/Controller/event.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Empresa, Eventos])],
  controllers: [EmpresaController, FileController, EventoController],
  providers: [EmpresaService, EventosService, EmpresaResolver],
})
export class CompanyModule {}
