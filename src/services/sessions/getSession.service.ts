import { FollowerFollowing } from "../../entities";
import { userRepository } from "../../repositories";
import { ownerSessionResponseSchema } from "../../schemas/sessions/createSession.schemas";

export const getSessionService = async (userId: string) => {
  const userQueryBuilder = userRepository.createQueryBuilder("u");

  const ownerSession = await userQueryBuilder
    .leftJoinAndSelect("u.posts", "ups")
    .orderBy("ups.createdAt", "DESC")
    .leftJoinAndSelect("ups.likes", "pls")
    .leftJoinAndSelect("pls.owner", "ol")
    .leftJoinAndSelect("ups.comments", "pcs")
    .leftJoinAndSelect("pcs.owner", "oc")
    .leftJoinAndMapMany(
      "u.followers",
      FollowerFollowing,
      "fs",
      "fs.following = u.id"
    )
    .leftJoinAndSelect("fs.follower", "fsu")
    .leftJoinAndMapMany(
      "u.following",
      FollowerFollowing,
      "fg",
      "fg.follower = u.id"
    )
    .leftJoinAndSelect("fg.following", "fgu")
    .where("u.id = :userId", { userId })
    .getOne();

  return await ownerSessionResponseSchema.validate(ownerSession, {
    stripUnknown: true,
  });
};
