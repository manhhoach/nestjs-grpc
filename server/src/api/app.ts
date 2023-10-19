import express, { Request, Response, NextFunction } from "express";
const app = express();

import { responseWithError } from "./helpers/response";
import routers from "./routers";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',routers);
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  res.json(responseWithError(err));
});

export = app;
