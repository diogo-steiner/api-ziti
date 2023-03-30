import { Request, Response } from "express";
import { ICreatePostResponse } from "../../interfaces/posts.interface";
import { createPostService } from "../../services";

export const createPostController = async (req: Request, res: Response) => {
  const ownerId: string = req.user.id;
  const newPost: ICreatePostResponse = await createPostService(
    req.body,
    ownerId
  );
  return res.status(201).json(newPost);
};
