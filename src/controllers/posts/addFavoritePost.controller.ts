import { Request, Response } from "express";
import { IFavoritePostResponse } from "../../interfaces/posts.interface";
import { addFavoritePostService } from "../../services";

export const addFavoritePostController = async (
  req: Request,
  res: Response
) => {
  const newFavorite: IFavoritePostResponse = await addFavoritePostService(
    req.params.postId,
    req.user.id
  );
  return res.status(201).json(newFavorite);
};
