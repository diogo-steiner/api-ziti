import { AppError } from "../../errors";
import { commentPostRepository } from "../../repositories";

export const deleteCommentPostService = async (
  commentId: string,
  ownerId: string
) => {
  const comment = await commentPostRepository.findOne({
    where: { id: commentId },
    relations: { owner: true },
  });

  if (!comment) {
    throw new AppError(404, "Comment not found");
  }

  if (comment.owner.id != ownerId) {
    throw new AppError(
      401,
      "It is not allowed to delete another user comment without admin permission"
    );
  }

  await commentPostRepository.delete({ id: commentId });
  return {};
};
