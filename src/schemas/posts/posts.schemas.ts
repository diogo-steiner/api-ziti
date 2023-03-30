import * as yup from "yup";
import {
  IAddCommentPostRequest,
  IAddCommentPostResponse,
  IAddFavoritePostResponse,
  IAddLikePostResponse,
  ICommnetPostResponse,
  IFavoritePostResponse,
  IGetPostResponse,
  ILikePostResponse,
  IPostBaseResponse,
  IPostFullResponse,
} from "../../interfaces/posts.interface";
import {
  ICreatePostRequest,
  ICreatePostResponse,
  IOwnerPostResponse,
} from "../../interfaces/posts.interface";

export const createPostRequestSchema: yup.SchemaOf<ICreatePostRequest> = yup
  .object()
  .shape({
    text: yup.string().min(1).max(20000).trim().required(),
  });

export const ownerPost: yup.SchemaOf<IOwnerPostResponse> = yup.object().shape({
  coverUrl: yup.string().nullable(),
  avatarUrl: yup.string().nullable(),
  username: yup.string(),
  lastName: yup.string(),
  firstName: yup.string(),
  id: yup.string(),
});

export const createPostResponseSchema: yup.SchemaOf<ICreatePostResponse> = yup
  .object()
  .shape({
    favorites: yup.array(),
    likes: yup.array(),
    comments: yup.array(),
    owner: yup.object().concat(ownerPost),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    text: yup.string(),
    id: yup.string(),
  });

export const postBaseResponseSchema: yup.SchemaOf<IPostBaseResponse> = yup
  .object()
  .shape({
    createdAt: yup.date(),
    updatedAt: yup.date(),
    text: yup.string(),
    id: yup.string(),
  });

export const likePostResponseSchema: yup.SchemaOf<ILikePostResponse> = yup
  .object()
  .shape({
    owner: yup.object().concat(ownerPost),
    id: yup.string(),
  });

export const addLikePostResponseSchema: yup.SchemaOf<IAddLikePostResponse> = yup
  .object()
  .shape({
    owner: yup.object().concat(ownerPost),
    post: yup.object().concat(postBaseResponseSchema),
    id: yup.string(),
  });

export const addCommentPostRequestSchema: yup.SchemaOf<IAddCommentPostRequest> =
  yup.object().shape({
    text: yup.string().min(1).max(20000).trim().required(),
  });

export const addCommentPostResponseSchema: yup.SchemaOf<IAddCommentPostResponse> =
  yup.object().shape({
    owner: yup.object().concat(ownerPost),
    post: yup.object().concat(postBaseResponseSchema),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    text: yup.string(),
    id: yup.string(),
  });

export const commentPostResponseSchema: yup.SchemaOf<ICommnetPostResponse> = yup
  .object()
  .shape({
    owner: yup.object().concat(ownerPost),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    text: yup.string(),
    id: yup.string(),
  });

export const addFavoritePostResponseSchema: yup.SchemaOf<IAddFavoritePostResponse> =
  yup.object().shape({
    owner: yup.object().concat(ownerPost),
    post: yup.object().concat(postBaseResponseSchema),
    id: yup.string(),
  });

export const favoritePostResponseSchema: yup.SchemaOf<IFavoritePostResponse> =
  yup.object().shape({
    owner: yup.object().concat(ownerPost),
    id: yup.string(),
  });

export const postResponseSchema: yup.SchemaOf<IPostFullResponse> = yup
  .object()
  .shape({
    favorites: yup.array(favoritePostResponseSchema),
    likes: yup.array(likePostResponseSchema),
    comments: yup.array(commentPostResponseSchema),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    text: yup.string(),
    id: yup.string(),
  });

export const getPostResponseSchema: yup.SchemaOf<IGetPostResponse> = yup
  .object()
  .shape({
    favorites: yup.array(favoritePostResponseSchema),
    comments: yup.array(commentPostResponseSchema),
    likes: yup.array(likePostResponseSchema),
    owner: yup.object().concat(ownerPost),
    createdAt: yup.date(),
    updatedAt: yup.date(),
    text: yup.string(),
    id: yup.string(),
  });

export const getPostsResponseSchema: yup.SchemaOf<IGetPostResponse[]> =
  yup.array(getPostResponseSchema);

export const getFavoritePostResponseSchema: yup.SchemaOf<IGetPostResponse> = yup
  .object()
  .concat(getPostResponseSchema)
  .transform((value) => value.post);

export const getFavoritesPostsResponseSchema = yup.array(
  getFavoritePostResponseSchema
);
