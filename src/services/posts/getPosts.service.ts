import { IGetPostResponse } from "../../interfaces/posts.interface";
import { postRepository } from "../../repositories";
import { getPostsResponseSchema } from "../../schemas";

export const getPostsService = async (): Promise<IGetPostResponse[]> => {
  const posts = await postRepository.find({
    relations: {
      owner: true,
      likes: { owner: true },
      comments: { owner: true },
      favorites: { owner: true },
    },
    order: {
      createdAt: "DESC",
      comments: { createdAt: "DESC" },
    },
  });

  return await getPostsResponseSchema.validate(posts, { stripUnknown: true });
};
