import { NextFunction, Response, Request } from "express";
import { tryCatch } from "../helpers/tryCatch";
import {register} from "../services/user";
import { responseSuccess } from "../helpers/response";

export const signUp = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    let data = await register(req.body.email, req.body.password);
    res.status(201).json(responseSuccess(data));

})