import { favoritePostRepository } from "../../repositories";
import { getFavoritesPostsResponseSchema } from "../../schemas/posts/posts.schemas";

export const getFavoritesPostsService = async (ownerId: string) => {
  const favorites = await favoritePostRepository.find({
    where: { owner: { id: ownerId } },
    relations: {
      post: {
        owner: true,
        likes: { owner: true },
        comments: { owner: true },
        favorites: { owner: true },
      },
    },
    order: {
      post: { createdAt: "DESC", comments: { createdAt: "DESC" } },
    },
  });

  return await getFavoritesPostsResponseSchema.validate(favorites, {
    stripUnknown: true,
  });
};
