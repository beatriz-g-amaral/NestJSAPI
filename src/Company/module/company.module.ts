import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TPT140 } from '../entity/company.entity';
import { TabelaLocalResolver } from '../resolver/company.resolver';
import { TabelaLocalService } from '../service/company.service';
import { TabelaLocalController } from '../controller/company.controller';
@Module({
  imports: [TypeOrmModule.forFeature([TPT140])],
  controllers: [TabelaLocalController],
  providers: [TabelaLocalService, TabelaLocalResolver],
})
export class CompanyModule {}