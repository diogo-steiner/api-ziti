import { Router } from "express";
import { createUserController } from "../controllers";
import { verifyBodyRequestMiddleware } from "../midlewares";
import { createUserRequestSchema } from "../schemas";

export const usersRoutes = Router();
usersRoutes.post(
  "",
  verifyBodyRequestMiddleware(createUserRequestSchema),
  createUserController
);
