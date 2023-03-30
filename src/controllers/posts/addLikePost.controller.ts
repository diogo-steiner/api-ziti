import { Request, Response } from "express";
import { IAddLikePostResponse } from "../../interfaces/posts.interface";
import { addLikePostService } from "../../services";

export const addLikePostController = async (req: Request, res: Response) => {
  const postId: string = req.params.postId;
  const ownerLikeId: string = req.user.id;
  const newLike: IAddLikePostResponse = await addLikePostService(
    postId,
    ownerLikeId
  );
  return res.status(201).json(newLike);
};
