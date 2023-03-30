import { AppError } from "../../errors";
import { IAddLikePostResponse } from "../../interfaces/posts.interface";
import {
  likePostRepository,
  postRepository,
  userRepository,
} from "../../repositories";
import { addLikePostResponseSchema } from "../../schemas";

export const addLikePostService = async (
  postId: string,
  ownerLikeId: string
): Promise<IAddLikePostResponse> => {
  const post = await postRepository.findOneBy({ id: postId });

  if (!post) {
    throw new AppError(404, "Post not found");
  }

  const likePostQueryBuilder = likePostRepository.createQueryBuilder("lp");
  const existLikePost = await likePostQueryBuilder
    .where("lp.post.id = :postId", { postId })
    .andWhere("lp.owner.id = :ownerLikeId", { ownerLikeId })
    .getOne();

  if (existLikePost) {
    throw new AppError(409, "Post already liked");
  }

  const ownerLike = await userRepository.findOneBy({ id: ownerLikeId });

  let newLike = likePostRepository.create({ owner: ownerLike, post: post });
  newLike = await likePostRepository.save(newLike);

  return await addLikePostResponseSchema.validate(newLike, {
    stripUnknown: true,
  });
};
