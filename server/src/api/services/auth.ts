import AppError from "../helpers/AppError";

import { BaseEntity, FindOptionsWhere } from "typeorm";
import { UserEntity } from "../entities/user";
import { dataSource } from "../database/database";
const userRepository = dataSource.getRepository(UserEntity);


export const register = async (email: string, password: string) => {
  let user = new UserEntity();
  user = Object.assign(user, { email, password });
  return userRepository.save(user);
};

export const login = async (email: string, password: string) => {
  let user = await userRepository.findOne({
    where: { email: email } as FindOptionsWhere<BaseEntity>,
  });
  if (!user) {
    throw new AppError(401, "Invalid credentials");
  } else {
    if (user.password === password) {
      return user;
    } else {
      throw new AppError(401, "Invalid credentials");
    }
  }
};
