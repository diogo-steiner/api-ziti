import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserEntityMigration1677754904253 implements MigrationInterface {
    name = 'createUserEntityMigration1677754904253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying(32) NOT NULL, "lastName" character varying(32) NOT NULL, "username" character varying(16) NOT NULL, "email" character varying(72) NOT NULL, "password" text NOT NULL, "avatarUrl" text, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
