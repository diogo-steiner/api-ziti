import * as yup from "yup";
import {
  ICreateSessionRequest,
  ICreateSessionResponse,
  IOwnerSessionResponse,
} from "../../interfaces/sessions.interface";

export const createSessionRequestSchema: yup.SchemaOf<ICreateSessionRequest> =
  yup.object().shape({
    username: yup.string().min(3).max(16).trim().required(),
    password: yup.string().min(6).max(72).trim().required(),
  });

export const ownerSessionResponseSchema: yup.SchemaOf<IOwnerSessionResponse> =
  yup.object().shape({
    createdAt: yup.date(),
    updatedAt: yup.date(),
    coverUrl: yup.mixed(),
    avatarUrl: yup.mixed(),
    email: yup.string(),
    username: yup.string(),
    lastName: yup.string(),
    firstName: yup.string(),
    id: yup.string(),
  });

export const createSessionResponseSchema: yup.SchemaOf<ICreateSessionResponse> =
  yup.object().shape({
    user: yup.object().concat(ownerSessionResponseSchema),
    token: yup.string(),
  });
