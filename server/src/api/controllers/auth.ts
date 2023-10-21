import * as grpc from "@grpc/grpc-js";
import { LoginDto__Output } from "../../proto-out/LoginDto";
import { Empty__Output } from "../../proto-out/Empty";
import { RegisterDto__Output } from "./../../proto-out/RegisterDto";
import { User__Output } from "./../../proto-out/User";
import { Users__Output } from "../../proto-out/Users";

import * as authService from "../services/auth";
import { tryCatch } from "./../helpers/tryCatch";

export const register = tryCatch(
  async (
    req: grpc.ServerUnaryCall<RegisterDto__Output, User__Output>,
    res: grpc.sendUnaryData<User__Output>
  ) => {
    let data = await authService.register(
      req.request.email,
      req.request.password
    );
    res(null, data);
  }
);

export const login = tryCatch(
  async (
    req: grpc.ServerUnaryCall<LoginDto__Output, User__Output>,
    res: grpc.sendUnaryData<User__Output>
  ) => {
    let data = await authService.login(req.request.email, req.request.password);
    res(null, data);
  }
);

export const getAll = tryCatch(
  async (
    req: grpc.ServerUnaryCall<Empty__Output, Users__Output>,
    res: grpc.sendUnaryData<Users__Output>
  ) => {
    let data = await authService.getAll();
    res(null, { users: data });
  }
);
