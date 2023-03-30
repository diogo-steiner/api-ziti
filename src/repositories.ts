import { AppDataSource } from "./data-source";
import {
  CommentPost,
  FavoritePost,
  FollowerFollowing,
  LikePost,
  Post,
  User,
} from "./entities";

export const userRepository = AppDataSource.getRepository(User);
export const postRepository = AppDataSource.getRepository(Post);
export const likePostRepository = AppDataSource.getRepository(LikePost);
export const commentPostRepository = AppDataSource.getRepository(CommentPost);
export const favoritePostRepository = AppDataSource.getRepository(FavoritePost);
export const followerFollowingRepository =
  AppDataSource.getRepository(FollowerFollowing);
