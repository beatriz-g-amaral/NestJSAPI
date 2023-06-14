import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaController } from './company.controller';
import { EmpresaService } from '../service/company.service';
import { Empresa } from '../entity/company.entity';
import { CompanyModule } from '../module/company.module';
import { Repository } from 'typeorm';

describe('EmpresaController', () => {
  let empresaController: EmpresaController;
  let empresaService: EmpresaService;
  let empresaRepository: Repository<Empresa>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CompanyModule],
      controllers: [EmpresaController],
      providers: [EmpresaService],
    }).compile();

    empresaController = module.get<EmpresaController>(EmpresaController);
    empresaService = module.get<EmpresaService>(EmpresaService);
    empresaRepository = module.get<Repository<Empresa>>(Repository);
  });

  describe('findOneByCodigo', () => {
    it('should return a single Empresa object', async () => {
      const expectedEmpresa: Empresa = {
        codigo: '123',
        nome: 'Company 123',
        id: 0,
        situacaoPagamento: '',
        dataPagamento: undefined,
        servico: '',
      };

      jest
        .spyOn(empresaService, 'findOneByCode')
        .mockResolvedValue(expectedEmpresa);

      const result = await empresaController.findOneByCodigo('123');

      expect(result).toBe(expectedEmpresa);
    });
  });

  describe('findAll', () => {
    it('should return an array of Empresa objects', async () => {
      const expectedEmpresas: Empresa[] = [
        {
          codigo: '123',
          nome: 'Company 123',
          id: 0,
          situacaoPagamento: '',
          dataPagamento: undefined,
          servico: '',
        },
        {
          codigo: '456',
          nome: 'Company 456',
          id: 0,
          situacaoPagamento: '',
          dataPagamento: undefined,
          servico: '',
        },
      ];

      jest.spyOn(empresaService, 'findAll').mockResolvedValue(expectedEmpresas);

      const result = await empresaController.findAll();

      expect(result).toBe(expectedEmpresas);
    });
  });

  describe('create', () => {
    it('should create a new Empresa object', async () => {
      const newEmpresa: Empresa = {
        codigo: '789',
        nome: 'Company 789',
        id: 0,
        situacaoPagamento: '',
        dataPagamento: undefined,
        servico: '',
      };
      const expectedCreatedEmpresa: Empresa = {
        codigo: '789',
        nome: 'Company 789',
        id: 0,
        situacaoPagamento: '',
        dataPagamento: undefined,
        servico: '',
      };

      jest
        .spyOn(empresaService, 'create')
        .mockResolvedValue(expectedCreatedEmpresa);

      const result = await empresaController.create(newEmpresa);

      expect(result).toBe(expectedCreatedEmpresa);
    });
  });

  describe('deleteByCodigo', () => {
    it('should delete an existing Empresa object', async () => {
      const codigo = '123';
      const existingEmpresa: Empresa = {
        codigo: '123',
        nome: 'Company 123',
        id: 0,
        situacaoPagamento: '',
        dataPagamento: undefined,
        servico: '',
      };
      const deletedEmpresa: Empresa = {
        codigo: '123',
        nome: 'Company 123',
        id: 0,
        situacaoPagamento: '',
        dataPagamento: undefined,
        servico: '',
      };

      jest
        .spyOn(empresaService, 'findOneByCode')
        .mockResolvedValue(existingEmpresa);
      jest.spyOn(empresaService, 'delete').mockResolvedValue(deletedEmpresa);

      const result = await empresaController.deleteByCodigo(codigo);

      expect(result).toBe(deletedEmpresa);
    });

    it('should throw an error if Empresa object is not found', async () => {
      const codigo = '123';

      jest.spyOn(empresaService, 'findOneByCode').mockResolvedValue(undefined);

      await expect(
        empresaController.deleteByCodigo(codigo),
      ).rejects.toThrowError(`Could not find Empresa with codigo=${codigo}`);
    });
  });
});
