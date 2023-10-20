import { NextFunction, Response, Request } from "express";
import { tryCatch } from "../helpers/tryCatch";
import {register, login} from "../services/auth";
import { responseSuccess } from "../helpers/response";

export const signUp = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    let data = await register(req.body.email, req.body.password);
    res.status(201).json(responseSuccess(data));

})
export const signIn = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    let data = await login(req.body.email, req.body.password)
    res.status(200).json(responseSuccess(data));
})