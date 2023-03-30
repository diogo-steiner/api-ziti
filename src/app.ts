import "express-async-errors";
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { HandleError } from "./errors";
import {
  usersRoutes,
  sessiosnRoutes,
  postsRoutes,
  followersRoutes,
} from "./routes/indedx";

dotenv.config();

export const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/sessions", sessiosnRoutes);
app.use("/posts", postsRoutes);
app.use("/followers", followersRoutes);
app.use(HandleError);
