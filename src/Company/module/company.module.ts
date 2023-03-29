import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TPT140 } from '../entity/company.entity';
import { TabelaLocalResolver } from '../resolver/company.resolver';
import { TabelaLocalService } from '../service/company.service';

@Module({
  imports: [TypeOrmModule.forFeature([TPT140])],
  providers: [TabelaLocalService, TabelaLocalResolver],
})
export class CompanyModule {}