import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Migrations1683843629414 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'empresas',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'codigo',
            type: 'varchar',
          },
          {
            name: 'situacao_pagamento',
            type: 'varchar',
          },
          {
            name: 'data_pagamento',
            type: 'timestamp',
          },
          {
            name: 'servico',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('empresas');
  }
}
