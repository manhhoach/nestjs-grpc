import { Request, Response, NextFunction } from "express";
import { tryCatch } from "./../helpers/tryCatch";
import { loadPackageDefinition, credentials } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { join } from "path";
import { ProtoGrpcType } from "./../../proto-out/auth";
import { responseSuccess, responseWithError } from "../helpers/response";
import * as renderService from "./../services/render";

const AUTH_PROTO_PATH = join(__dirname, "../../../proto/auth.proto");

const authPackageDefinition = loadSync(AUTH_PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const AuthService = (
  loadPackageDefinition(authPackageDefinition) as unknown as ProtoGrpcType
).AuthService;
const authService = new AuthService(
  "localhost:3001",
  credentials.createInsecure()
);

export const register = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    authService.register(
      {
        email: req.body.email,
        password: req.body.password,
      },
      (err, data) => {
        if (err) {
          return res.json(responseWithError(err));
        }
        renderService.renderPdf(
          data,
          "docx/user.docx",
          "docx/filled_user.docx"
        );
        res.json(responseSuccess(data));
      }
    );
  }
);

export const login = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    authService.login(
      {
        email: req.body.email,
        password: req.body.password,
      },
      (err, data) => {
        if (err) {
          return res.json({
            message: err.message,
          });
        }
        res.json(responseSuccess(data));
      }
    );
  }
);

export const getAll = tryCatch(
  async (req: Request, res: Response, next: NextFunction) => {
    authService.getAll({}, (err, data) => {
      if (err) {
        return res.json({
          message: err.message,
        });
      }
      let users = data?.users;
      let usersFormatted = users?.map((user, i: number) => ({
        ...user,
        i: i + 1,
      }));
      renderService.renderPdf(
        usersFormatted,
        "docx/users.docx",
        "docx/filled_users.docx"
      );
      res.json(responseSuccess(users));
    });
  }
);
