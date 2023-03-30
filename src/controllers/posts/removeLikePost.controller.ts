import { Request, Response } from "express";
import { removeLikePostService } from "../../services";

export const removeLikePostController = async (req: Request, res: Response) => {
  const likeId: string = req.params.likeId;
  await removeLikePostService(likeId);
  return res.status(204).json({});
};
