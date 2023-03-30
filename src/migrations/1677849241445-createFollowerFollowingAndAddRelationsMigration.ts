import { MigrationInterface, QueryRunner } from "typeorm";

export class createFollowerFollowingAndAddRelationsMigration1677849241445 implements MigrationInterface {
    name = 'createFollowerFollowingAndAddRelationsMigration1677849241445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "followers_followings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "followingId" uuid, "followerId" uuid, CONSTRAINT "PK_e74139a540cdaab321bcdef08fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "followers_followings" ADD CONSTRAINT "FK_5cb1eef6b178f650b83be0d001b" FOREIGN KEY ("followingId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "followers_followings" ADD CONSTRAINT "FK_11db4bf8d3d1953f16f048e1c30" FOREIGN KEY ("followerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "followers_followings" DROP CONSTRAINT "FK_11db4bf8d3d1953f16f048e1c30"`);
        await queryRunner.query(`ALTER TABLE "followers_followings" DROP CONSTRAINT "FK_5cb1eef6b178f650b83be0d001b"`);
        await queryRunner.query(`DROP TABLE "followers_followings"`);
    }

}
