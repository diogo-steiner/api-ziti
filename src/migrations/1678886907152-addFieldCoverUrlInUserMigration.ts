import { MigrationInterface, QueryRunner } from "typeorm";

export class addFieldCoverUrlInUserMigration1678886907152 implements MigrationInterface {
    name = 'addFieldCoverUrlInUserMigration1678886907152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "coverUrl" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "coverUrl"`);
    }

}
