import { MigrationInterface, QueryRunner } from "typeorm";

export class addRelationUserAndPostMigration1677791264896 implements MigrationInterface {
    name = 'addRelationUserAndPostMigration1677791264896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" ADD "ownerId" uuid`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_0e33434a2d18c89a149c8ad6d86" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_0e33434a2d18c89a149c8ad6d86"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP COLUMN "ownerId"`);
    }

}
