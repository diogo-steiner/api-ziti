import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { AppError } from "../errors";

export const verifyAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const autoToken: string = req.headers.authorization;

  if (!autoToken) {
    throw new AppError(401, "Missing headers authorization");
  }

  const token = autoToken.split(" ")[1];

  return jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      throw new AppError(401, error.message);
    }

    req.user = {
      id: String(decoded.sub),
    };

    return next();
  });
};
