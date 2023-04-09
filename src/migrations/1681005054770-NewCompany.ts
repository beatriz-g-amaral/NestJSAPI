import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class NewCompany1681005054770 implements MigrationInterface {
    private table = new Table({
        name: 'Company',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true, // Auto-increment
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            isNullable: false,
            default: 'now()',
          },
        ],
      });
    
      public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.table);
      }
      public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.table);
      }
    }