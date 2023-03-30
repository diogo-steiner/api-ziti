import { Request, Response } from "express";
import { ICreateSessionResponse } from "../../interfaces/sessions.interface";
import { createSessionService } from "../../services";

export const createSessionController = async (req: Request, res: Response) => {
  const newSession: ICreateSessionResponse = await createSessionService(
    req.body
  );
  return res.status(200).json(newSession);
};
