import { Request, Response } from "express";
import { getSessionService } from "../../services";

export const getSessionController = async (req: Request, res: Response) => {
  const session = await getSessionService(req.user.id);
  return res.status(200).json(session);
};
