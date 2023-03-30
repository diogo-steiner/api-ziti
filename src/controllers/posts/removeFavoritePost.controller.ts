import { Request, Response } from "express";
import { removeFavoritePostService } from "../../services";

export const removeFavoritePostController = async (
  req: Request,
  res: Response
) => {
  await removeFavoritePostService(req.params.favoriteId, req.user.id);
  return res.status(204).json({});
};
