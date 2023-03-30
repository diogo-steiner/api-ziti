import { AppError } from "../../errors";
import { followerFollowingRepository } from "../../repositories";

export const removeFollowService = async (
  followId: string,
  ownerId: string
): Promise<{}> => {
  const follow = await followerFollowingRepository.findOne({
    where: { id: followId },
    relations: { follower: true },
  });

  if (!follow) {
    throw new AppError(404, "Follow not found");
  }

  if (follow.follower.id != ownerId) {
    throw new AppError(
      401,
      "It is not possible to remove another user's follower without an admin's permission"
    );
  }

  await followerFollowingRepository.delete({ id: followId });

  return {};
};
