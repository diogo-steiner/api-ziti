import { Request, Response } from "express";
import { getFavoritesPostsService } from "../../services";

export const getFavoritesPostsController = async (
  req: Request,
  res: Response
) => {
  const favorites = await getFavoritesPostsService(req.user.id);
  return res.status(200).json(favorites);
};
