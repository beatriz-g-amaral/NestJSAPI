import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../entity/company.entity';
import { CompanyResolver } from '../resolver/company.resolver';
import { CompanyService } from '../service/company.service';
import { CompanyController } from '../controller/company.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService, CompanyResolver],
})
export class CompanyModule {}
