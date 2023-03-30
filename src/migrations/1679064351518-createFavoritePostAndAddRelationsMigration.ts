import { MigrationInterface, QueryRunner } from "typeorm";

export class createFavoritePostAndAddRelationsMigration1679064351518 implements MigrationInterface {
    name = 'createFavoritePostAndAddRelationsMigration1679064351518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorites_posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postId" uuid, "ownerId" uuid, CONSTRAINT "PK_492bc154f93ab63961d00cede7c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favorites_posts" ADD CONSTRAINT "FK_863f749dbea6e9ad2c56f1f7cab" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "favorites_posts" ADD CONSTRAINT "FK_01074b5481f2bf47494879a4460" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorites_posts" DROP CONSTRAINT "FK_01074b5481f2bf47494879a4460"`);
        await queryRunner.query(`ALTER TABLE "favorites_posts" DROP CONSTRAINT "FK_863f749dbea6e9ad2c56f1f7cab"`);
        await queryRunner.query(`DROP TABLE "favorites_posts"`);
    }

}
