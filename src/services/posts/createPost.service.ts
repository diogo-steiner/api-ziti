import {
  ICreatePostRequest,
  ICreatePostResponse,
} from "../../interfaces/posts.interface";
import { postRepository, userRepository } from "../../repositories";
import { createPostResponseSchema } from "../../schemas";

export const createPostService = async (
  dataPost: ICreatePostRequest,
  ownerId: string
): Promise<ICreatePostResponse> => {
  const owner = await userRepository.findOneBy({ id: ownerId });

  let newPost = postRepository.create(dataPost);
  newPost.owner = owner;
  newPost = await postRepository.save(newPost);
  newPost.likes = [];
  newPost.comments = [];
  newPost.favorites = [];

  return await createPostResponseSchema.validate(newPost, {
    stripUnknown: true,
  });
};
