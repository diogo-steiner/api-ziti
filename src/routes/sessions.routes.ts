import { Router } from "express";
import { createSessionController, getSessionController } from "../controllers";
import {
  verifyAuthMiddleware,
  verifyBodyRequestMiddleware,
} from "../midlewares";
import { createSessionRequestSchema } from "../schemas";

export const sessiosnRoutes = Router();
sessiosnRoutes.post(
  "",
  verifyBodyRequestMiddleware(createSessionRequestSchema),
  createSessionController
);
sessiosnRoutes.get("", verifyAuthMiddleware, getSessionController);
