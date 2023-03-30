import { AppError } from "../../errors";
import { IFavoritePostResponse } from "../../interfaces/posts.interface";
import {
  favoritePostRepository,
  postRepository,
  userRepository,
} from "../../repositories";
import { addFavoritePostResponseSchema } from "../../schemas/posts/posts.schemas";

export const addFavoritePostService = async (
  postId: string,
  ownerId: string
): Promise<IFavoritePostResponse> => {
  const post = await postRepository.findOneBy({ id: postId });

  if (!post) {
    throw new AppError(404, "Post not found");
  }

  const favoritePostQueryBuilder =
    favoritePostRepository.createQueryBuilder("fp");
  const existFavoritePost = await favoritePostQueryBuilder
    .select()
    .where("fp.postId = :postId", { postId })
    .andWhere("fp.ownerId = :ownerId", { ownerId })
    .getOne();

  if (existFavoritePost) {
    throw new AppError(409, "Post already favorited");
  }

  const owner = await userRepository.findOneBy({ id: ownerId });

  const newFavorite = favoritePostRepository.create({ post, owner });
  await favoritePostRepository.save(newFavorite);

  return await addFavoritePostResponseSchema.validate(newFavorite, {
    stripUnknown: true,
  });
};
