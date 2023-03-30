import { Request, Response } from "express";
import { deleteCommentPostService } from "../../services";

export const deleteCommentPostController = async (
  req: Request,
  res: Response
) => {
  const ownerId: string = req.user.id;
  const commentId: string = req.params.commentId;
  await deleteCommentPostService(commentId, ownerId);
  return res.status(204).json({});
};
