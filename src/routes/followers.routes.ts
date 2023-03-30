import { Router } from "express";
import {
  addFollowerController,
  getFollowerSuggestionsController,
  removeFollowController,
} from "../controllers";
import { verifyAuthMiddleware } from "../midlewares";

export const followersRoutes = Router();
followersRoutes.post(
  "/:userForFollowId",
  verifyAuthMiddleware,
  addFollowerController
);
followersRoutes.delete(
  "/:followId",
  verifyAuthMiddleware,
  removeFollowController
);
followersRoutes.get(
  "/suggestions",
  verifyAuthMiddleware,
  getFollowerSuggestionsController
);
