import { Request, Response } from "express";
import { IGetPostResponse } from "../../interfaces/posts.interface";
import { getPostsService } from "../../services";

export const getPostsController = async (req: Request, res: Response) => {
  const posts: IGetPostResponse[] = await getPostsService();
  return res.status(200).json(posts);
};
