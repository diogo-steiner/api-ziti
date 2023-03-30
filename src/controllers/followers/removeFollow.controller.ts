import { Request, Response } from "express";
import { removeFollowService } from "../../services";

export const removeFollowController = async (req: Request, res: Response) => {
  await removeFollowService(req.params.followId, req.user.id);
  return res.status(204).json({});
};
