import {Metadata, ServerErrorResponse} from '@grpc/grpc-js'

interface IServerErrorResponse extends ServerErrorResponse{}

class AppError implements IServerErrorResponse {
  code: number;
  name: string;
  message: string;
  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}
export = AppError;
