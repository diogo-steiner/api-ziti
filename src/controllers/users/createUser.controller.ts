import { Request, Response } from "express";
import { ICreateSessionResponse } from "../../interfaces/sessions.interface";
import { createUserService } from "../../services";

export const createUserController = async (req: Request, res: Response) => {
  const newUser: ICreateSessionResponse = await createUserService(req.body);
  return res.status(201).json(newUser);
};
