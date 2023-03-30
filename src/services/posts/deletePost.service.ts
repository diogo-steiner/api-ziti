import { AppError } from "../../errors";
import { postRepository } from "../../repositories";

export const deletePostService = async (
  postId: string,
  ownerId: string
): Promise<{}> => {
  const post = await postRepository.findOne({
    where: { id: postId },
    relations: { owner: true },
  });

  if (!post) {
    throw new AppError(404, "Post not found");
  }

  if (post.owner.id != ownerId) {
    throw new AppError(
      401,
      "It is not allowed to delete another user's post without admin permission"
    );
  }

  await postRepository.delete({ id: postId });

  return {};
};
