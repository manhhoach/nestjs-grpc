import { NextFunction } from "express";
import { tryCatch } from "../helpers/tryCatch";
import * as renderService from "../services/render";
import { responseSuccess } from "../helpers/response";

export const renderPdf = tryCatch(async (req: Request, res: Response, next: NextFunction) => {
    let data = await renderService.renderPdf();
    console.log(data);

})