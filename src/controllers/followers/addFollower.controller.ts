import { Request, Response } from "express";
import { IAddFollowerResponse } from "../../interfaces/followers.interface";
import { addFollowerService } from "../../services";

export const addFollowerController = async (req: Request, res: Response) => {
  const userFollowerId: string = req.user.id;
  const userForFollowId: string = req.params.userForFollowId;
  const newFollower: IAddFollowerResponse = await addFollowerService(
    userFollowerId,
    userForFollowId
  );
  return res.status(201).json(newFollower);
};
