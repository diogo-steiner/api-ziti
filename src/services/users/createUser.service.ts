import { AppError } from "../../errors";
import { ICreateUserRequest } from "../../interfaces/users.interface";
import { userRepository } from "../../repositories";
import { createSessionService } from "..";
import { ICreateSessionResponse } from "../../interfaces/sessions.interface";

export const createUserService = async (
  dataUser: ICreateUserRequest
): Promise<ICreateSessionResponse> => {
  const existUserWithEmailRegistered = await userRepository.findOneBy({
    email: dataUser.email,
  });

  if (existUserWithEmailRegistered) {
    throw new AppError(409, "Email already registered");
  }

  const existUserWithUsernameRegistered = await userRepository.findOneBy({
    username: dataUser.username,
  });

  if (existUserWithUsernameRegistered) {
    throw new AppError(409, "Username already resgistered");
  }

  let newUser = userRepository.create(dataUser);
  newUser = await userRepository.save(newUser);

  const dataForSession = {
    username: dataUser.username,
    password: dataUser.password,
  };

  return await createSessionService(dataForSession);
};
