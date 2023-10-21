import { loadPackageDefinition, Server } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { join } from "path";
import * as authController from './controllers/auth'
import {ProtoGrpcType} from './../proto-out/auth'

const AUTH_PROTO_PATH = join(__dirname, "../../proto/auth.proto");
const authPackageDefinition = loadSync(AUTH_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});
const Proto = loadPackageDefinition(authPackageDefinition) as unknown as ProtoGrpcType;

const server = new Server();

server.addService(Proto.AuthService.service, {
  login: (req: any, res: any) =>  authController.login(req, res),
  register: (req: any, res: any) => authController.register(req, res),
  getAll: (req: any, res: any) => authController.getAll(req, res)
});

export = server;
