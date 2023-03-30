import { MigrationInterface, QueryRunner } from "typeorm";

export class createLikePostentityAndAddRelationsMigration1677798266719 implements MigrationInterface {
    name = 'createLikePostentityAndAddRelationsMigration1677798266719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "likes_posts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "postId" uuid, "ownerId" uuid, CONSTRAINT "PK_700a22aa0bad878ccc8ebb8ba81" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "likes_posts" ADD CONSTRAINT "FK_aa28259ec0da53a0fbfb7001740" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "likes_posts" ADD CONSTRAINT "FK_87c15c105ae9f3371fc83799fce" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes_posts" DROP CONSTRAINT "FK_87c15c105ae9f3371fc83799fce"`);
        await queryRunner.query(`ALTER TABLE "likes_posts" DROP CONSTRAINT "FK_aa28259ec0da53a0fbfb7001740"`);
        await queryRunner.query(`DROP TABLE "likes_posts"`);
    }

}
