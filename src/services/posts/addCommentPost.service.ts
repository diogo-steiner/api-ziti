import { AppError } from "../../errors";
import {
  IAddCommentPostRequest,
  IAddCommentPostResponse,
} from "../../interfaces/posts.interface";
import {
  commentPostRepository,
  postRepository,
  userRepository,
} from "../../repositories";
import { addCommentPostResponseSchema } from "../../schemas";

export const addCommentPostService = async (
  dataComment: IAddCommentPostRequest,
  postId: string,
  ownerCommentId: string
): Promise<IAddCommentPostResponse> => {
  const post = await postRepository.findOneBy({ id: postId });

  if (!post) {
    throw new AppError(404, "Post not found");
  }

  const ownerComment = await userRepository.findOneBy({ id: ownerCommentId });

  let newComment = commentPostRepository.create(dataComment);
  newComment.post = post;
  newComment.owner = ownerComment;
  newComment = await commentPostRepository.save(newComment);

  return await addCommentPostResponseSchema.validate(newComment, {
    stripUnknown: true,
  });
};
