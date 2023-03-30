import { Request, Response } from "express";
import { deletePostService } from "../../services";

export const deletePostController = async (req: Request, res: Response) => {
  const ownerId: string = req.user.id;
  const postId: string = req.params.postId;

  await deletePostService(postId, ownerId);
  return res.status(204).json({});
};
