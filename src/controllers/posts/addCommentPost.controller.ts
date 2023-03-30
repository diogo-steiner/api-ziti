import { Request, Response } from "express";
import { IAddCommentPostResponse } from "../../interfaces/posts.interface";
import { addCommentPostService } from "../../services";

export const addCommentPostController = async (req: Request, res: Response) => {
  const postId: string = req.params.postId;
  const ownerCommentId: string = req.user.id;
  const newComment: IAddCommentPostResponse = await addCommentPostService(
    req.body,
    postId,
    ownerCommentId
  );
  return res.status(201).json(newComment);
};
