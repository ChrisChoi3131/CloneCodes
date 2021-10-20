import express from "express";
import { getEdit, postEdit, remove, callbackGithub, loginGithub } from "../controllers/userController";
import { loggedInOnlyNavGuard, publicOnlyNavGuard } from "../middlewares"

const userRouter = express.Router();

userRouter.route("/edit").all(loggedInOnlyNavGuard).get(getEdit).post(postEdit);

userRouter.get("/github/login", publicOnlyNavGuard, loginGithub);
userRouter.get("/github/callback", publicOnlyNavGuard, callbackGithub);
userRouter.get("/remove", remove);
export default userRouter;