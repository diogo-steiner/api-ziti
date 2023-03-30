import { MigrationInterface, QueryRunner } from "typeorm";

export class addDeleteCascadePostCommentsLikesMigration1678657470921 implements MigrationInterface {
    name = 'addDeleteCascadePostCommentsLikesMigration1678657470921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "likes_posts" DROP CONSTRAINT "FK_aa28259ec0da53a0fbfb7001740"`);
        await queryRunner.query(`ALTER TABLE "comments_posts" DROP CONSTRAINT "FK_0b46e6092d6a08a4535e33245ae"`);
        await queryRunner.query(`ALTER TABLE "likes_posts" ADD CONSTRAINT "FK_aa28259ec0da53a0fbfb7001740" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments_posts" ADD CONSTRAINT "FK_0b46e6092d6a08a4535e33245ae" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments_posts" DROP CONSTRAINT "FK_0b46e6092d6a08a4535e33245ae"`);
        await queryRunner.query(`ALTER TABLE "likes_posts" DROP CONSTRAINT "FK_aa28259ec0da53a0fbfb7001740"`);
        await queryRunner.query(`ALTER TABLE "comments_posts" ADD CONSTRAINT "FK_0b46e6092d6a08a4535e33245ae" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "likes_posts" ADD CONSTRAINT "FK_aa28259ec0da53a0fbfb7001740" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
