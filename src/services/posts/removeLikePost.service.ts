import { AppError } from "../../errors";
import { likePostRepository } from "../../repositories";

export const removeLikePostService = async (likeId: string) => {
  const like = await likePostRepository.delete({ id: likeId });

  if (like.affected == 0) {
    throw new AppError(404, "Like not found");
  }
  return {};
};
