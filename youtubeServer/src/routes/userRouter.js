import express from "express";
import {edit, remove,callbackGithub,loginGithub } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/github/login", loginGithub);
userRouter.get("/github/callback", callbackGithub);
userRouter.get("/remove", remove);
export default userRouter;