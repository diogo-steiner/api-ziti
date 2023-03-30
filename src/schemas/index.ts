import {
  addFollowerResponseSchema,
  getFollowersSuggestionsResponseSchema,
} from "./followers/addFollower.schemas";
import {
  addCommentPostRequestSchema,
  addCommentPostResponseSchema,
  addLikePostResponseSchema,
  createPostRequestSchema,
  createPostResponseSchema,
  getPostResponseSchema,
  getPostsResponseSchema,
} from "./posts/posts.schemas";
import {
  createSessionRequestSchema,
  createSessionResponseSchema,
} from "./sessions/createSession.schemas";
import { createUserRequestSchema } from "./users/createUser.schemas";

export {
  createUserRequestSchema,
  createSessionRequestSchema,
  createSessionResponseSchema,
  createPostRequestSchema,
  createPostResponseSchema,
  getPostResponseSchema,
  getPostsResponseSchema,
  addLikePostResponseSchema,
  addCommentPostRequestSchema,
  addCommentPostResponseSchema,
  addFollowerResponseSchema,
  getFollowersSuggestionsResponseSchema,
};
