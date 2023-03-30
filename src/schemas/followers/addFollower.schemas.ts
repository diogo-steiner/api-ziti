import * as yup from "yup";
import {
  IAddFollowerResponse,
  IGetFollowersSuggestionsResponse,
  IUserFollowerResponse,
} from "../../interfaces/followers.interface";

export const userFollowerResponseSchema: yup.SchemaOf<IUserFollowerResponse> =
  yup.object().shape({
    createdAt: yup.date(),
    updatedAt: yup.date(),
    coverUrl: yup.mixed(),
    avatarUrl: yup.mixed(),
    username: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    id: yup.string(),
  });

export const addFollowerResponseSchema: yup.SchemaOf<IAddFollowerResponse> = yup
  .object()
  .shape({
    follower: yup.object().concat(userFollowerResponseSchema),
    following: yup.object().concat(userFollowerResponseSchema),
    id: yup.string(),
  });

export const getFollowersSuggestionsResponseSchema: yup.SchemaOf<IGetFollowersSuggestionsResponse> =
  yup.object().shape({
    content: yup.array(userFollowerResponseSchema),
    count: yup.number(),
    prev: yup.string().nullable(),
    next: yup.string().nullable(),
  });
