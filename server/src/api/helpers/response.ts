import AppError from "./AppError";
import { QueryFailedError } from "typeorm";

export const responseSuccess = (data: any) => {
  return {
    success: true,
    data,
  };
};

export const responseWithError = (err: AppError | QueryFailedError | any) => {
  let message = err.message ? err.message : err;
  let statusCode = err.statusCode? err.statusCode : 500;
  if (err instanceof QueryFailedError){
    message = err.driverError.detail;
    statusCode = 400;
  } 

  return {
    success: false,
    statusCode: statusCode,
    error: message,
  };
};
