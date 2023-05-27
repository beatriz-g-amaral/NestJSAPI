import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancesService } from './finance.service';
import { Contas } from './finance.entity';
import { FinancesController } from './finance.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contas])],
  controllers: [FinancesController],
  providers: [FinancesService],
})
export class FinanceModule {}
