import { loadPackageDefinition, Server } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { join } from "path";
import * as authService from "./services/auth";

const AUTH_PROTO_PATH = join(__dirname, "../../proto/auth.proto");
const authPackageDefinition = loadSync(AUTH_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const authProto: any = loadPackageDefinition(authPackageDefinition);

const server = new Server();

server.addService(authProto.AuthService.service, {
  login: async (call: any, callback: any) => {
    let data = await authService.login(
      call.request.email,
      call.request.password
    );
    callback(null, data);
  },
  register: (call: any, callback: any) => {
    callback(
      null,
      authService.register(call.request.email, call.request.password)
    );
  },
});

export = server;
