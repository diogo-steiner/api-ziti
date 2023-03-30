import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { AppError } from "../errors";

export const verifyBodyRequestMiddleware =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const bodyValidated = await schema
      .validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      })
      .catch((error) => {
        throw new AppError(400, error.errors);
      });

    req.body = bodyValidated;
    return next();
  };
