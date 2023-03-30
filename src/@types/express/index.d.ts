import * as express from "express";
import { IExpress } from "../../interfaces/express.interface";

declare global {
  namespace Express {
    interface Request {
      user: IExpress;
    }
  }
}
