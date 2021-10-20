import express from "express";
import { getEdit, postEdit, remove, callbackGithub, loginGithub } from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/edit").get(getEdit).post(postEdit);

userRouter.get("/github/login", loginGithub);
userRouter.get("/github/callback", callbackGithub);
userRouter.get("/remove", remove);
export default userRouter;