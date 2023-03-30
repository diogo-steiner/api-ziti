import { AppError } from "../../errors";
import { favoritePostRepository } from "../../repositories";

export const removeFavoritePostService = async (
  favoriteId: string,
  ownerId: string
) => {
  const favorite = await favoritePostRepository.findOne({
    where: { id: favoriteId },
    relations: { owner: true },
  });

  if (!favorite) {
    throw new AppError(404, "Post favorited not found");
  }

  if (favorite.owner.id != ownerId) {
    throw new AppError(
      401,
      "It is not possible remove post favorite of another user without admin permission"
    );
  }

  await favoritePostRepository.delete({ id: favorite.id });
  return {};
};
