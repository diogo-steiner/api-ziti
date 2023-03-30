import { MigrationInterface, QueryRunner } from "typeorm";

export class createCommentPostAndAddRelationsMigration1677839569301 implements MigrationInterface {
    name = 'createCommentPostAndAddRelationsMigration1677839569301'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments_posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" text NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" uuid, "ownerId" uuid, CONSTRAINT "PK_46d88a8ad6b206bcdb926e04a91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments_posts" ADD CONSTRAINT "FK_0b46e6092d6a08a4535e33245ae" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments_posts" ADD CONSTRAINT "FK_306dade1bca912e19a6d01c1d2e" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments_posts" DROP CONSTRAINT "FK_306dade1bca912e19a6d01c1d2e"`);
        await queryRunner.query(`ALTER TABLE "comments_posts" DROP CONSTRAINT "FK_0b46e6092d6a08a4535e33245ae"`);
        await queryRunner.query(`DROP TABLE "comments_posts"`);
    }

}
