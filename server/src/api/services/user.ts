import { getRepository } from "../database/database";
import { UserEntity } from "../entities/user";
const userRepository = getRepository(UserEntity);
import AppError from './../helpers/AppError'

export const register = async (email: string, password: string)=>{
    let user = new UserEntity();
    user = Object.assign(user, {email, password});
    let data = await userRepository.save(user);
    return data;
    
}