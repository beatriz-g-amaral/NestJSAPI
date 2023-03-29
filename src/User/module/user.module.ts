import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TPT001 } from '../entity/user.entity';
import { TabelaMoedaResolver } from '../resolver/user.resolver';
import { TabelaMoedaService } from '../service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([TPT001])],
  providers: [TabelaMoedaResolver, TabelaMoedaResolver],
})
export class UserModule {}