import { compare } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import {
  ICreateSessionRequest,
  ICreateSessionResponse,
} from "../../interfaces/sessions.interface";
import { userRepository } from "../../repositories";
import { createSessionResponseSchema } from "../../schemas";

export const createSessionService = async (
  dataSession: ICreateSessionRequest
): Promise<ICreateSessionResponse> => {
  const ownerSession = await userRepository.findOneBy({
    username: dataSession.username,
  });

  if (!ownerSession) {
    throw new AppError(401, "Username or password invalid");
  }

  const matchePassowrd = await compare(
    dataSession.password,
    ownerSession.password
  );

  if (!matchePassowrd) {
    throw new AppError(401, "Username or password invalid");
  }

  const token: string = jwt.sign({}, process.env.SECRET_KEY, {
    expiresIn: "72h",
    subject: ownerSession.id,
  });

  const ownerSessionReturn = {
    token,
    user: {
      ...ownerSession,
    },
  };

  return await createSessionResponseSchema.validate(ownerSessionReturn, {
    stripUnknown: true,
  });
};
