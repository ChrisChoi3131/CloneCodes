import express from "express";
import { callbackGithub, getEdit, loginGithub, postEdit, remove, getChangePassword, postChangePassword } from "../controllers/userController";
import { loggedInOnlyNavGuard, publicOnlyNavGuard } from "../middlewares";

const userRouter = express.Router();

userRouter.route("/edit").all(loggedInOnlyNavGuard).get(getEdit).post(postEdit);
userRouter.route("/change-password").all(loggedInOnlyNavGuard).get(getChangePassword).post(postChangePassword);
userRouter.get("/github/login", publicOnlyNavGuard, loginGithub);
userRouter.get("/github/callback", publicOnlyNavGuard, callbackGithub);

userRouter.get("/remove", remove);
export default userRouter;