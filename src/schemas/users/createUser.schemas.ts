import * as yup from "yup";
import { ICreateUserRequest } from "../../interfaces/users.interface";

export const createUserRequestSchema: yup.SchemaOf<ICreateUserRequest> = yup
  .object()
  .shape({
    firstName: yup.string().min(3).max(32).trim().required(),
    lastName: yup.string().min(3).max(32).trim().required(),
    username: yup.string().min(3).max(16).trim().required(),
    email: yup.string().email().min(6).max(72).trim().required(),
    password: yup.string().min(6).max(72).trim().required(),
  });
