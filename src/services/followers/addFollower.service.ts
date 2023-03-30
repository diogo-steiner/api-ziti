import { AppError } from "../../errors";
import { IAddFollowerResponse } from "../../interfaces/followers.interface";
import {
  followerFollowingRepository,
  userRepository,
} from "../../repositories";
import { addFollowerResponseSchema } from "../../schemas";

export const addFollowerService = async (
  userFollowerId: string,
  userForFollowId: string
): Promise<IAddFollowerResponse> => {
  const userForFollow = await userRepository.findOneBy({ id: userForFollowId });
  if (!userForFollow) {
    throw new AppError(404, "User not found");
  }

  const followerFollowingQueryBuilder =
    followerFollowingRepository.createQueryBuilder("ff");

  const existFollow = await followerFollowingQueryBuilder
    .where("ff.following.id = :userForFollowId", { userForFollowId })
    .andWhere("ff.follower.id = :userFollowerId", { userFollowerId })
    .getOne();

  if (existFollow) {
    throw new AppError(409, "User is already followed");
  }

  const userLogged = await userRepository.findOneBy({ id: userFollowerId });

  let newFollow = followerFollowingRepository.create({
    following: userForFollow,
    follower: userLogged,
  });

  newFollow = await followerFollowingRepository.save(newFollow);

  return await addFollowerResponseSchema.validate(newFollow, {
    stripUnknown: true,
  });
};
