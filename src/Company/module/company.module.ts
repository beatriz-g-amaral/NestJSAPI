import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabelaLocal } from '../entity/company.entity';
import { TabelaLocalResolver } from '../resolver/company.resolver';
import { TabelaLocalService } from '../service/company.service';

@Module({
  imports: [TypeOrmModule.forFeature([TabelaLocal])],
  providers: [TabelaLocalService, TabelaLocalResolver],
})
export class CompanyModule {}