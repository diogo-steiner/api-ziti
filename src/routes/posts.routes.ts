import { Router } from "express";
import {
  addCommentPostController,
  addFavoritePostController,
  addLikePostController,
  createPostController,
  deleteCommentPostController,
  deletePostController,
  getFavoritesPostsController,
  getPostsController,
  removeFavoritePostController,
  removeLikePostController,
} from "../controllers";
import {
  verifyBodyRequestMiddleware,
  verifyAuthMiddleware,
} from "../midlewares";
import {
  addCommentPostRequestSchema,
  createPostRequestSchema,
} from "../schemas";

export const postsRoutes = Router();
postsRoutes.post(
  "",
  verifyAuthMiddleware,
  verifyBodyRequestMiddleware(createPostRequestSchema),
  createPostController
);
postsRoutes.get("", verifyAuthMiddleware, getPostsController);
postsRoutes.delete("/:postId", verifyAuthMiddleware, deletePostController);
postsRoutes.post("/likes/:postId", verifyAuthMiddleware, addLikePostController);
postsRoutes.delete(
  "/likes/:likeId",
  verifyAuthMiddleware,
  removeLikePostController
);
postsRoutes.post(
  "/comments/:postId",
  verifyAuthMiddleware,
  verifyBodyRequestMiddleware(addCommentPostRequestSchema),
  addCommentPostController
);
postsRoutes.delete(
  "/comments/:commentId",
  verifyAuthMiddleware,
  deleteCommentPostController
);
postsRoutes.post(
  "/favorites/:postId",
  verifyAuthMiddleware,
  addFavoritePostController
);
postsRoutes.delete(
  "/favorites/:favoriteId",
  verifyAuthMiddleware,
  removeFavoritePostController
);
postsRoutes.get(
  "/favorites",
  verifyAuthMiddleware,
  getFavoritesPostsController
);
