import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tpt140 } from '../entity/company.entity';
import { TabelaLocalResolver } from '../resolver/company.resolver';
import { TabelaLocalService } from '../service/company.service';

@Module({
  imports: [TypeOrmModule.forFeature([tpt140])],
  providers: [TabelaLocalService, TabelaLocalResolver],
})
export class CompanyModule {}