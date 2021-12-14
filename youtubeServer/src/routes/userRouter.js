import express from "express";
import { callbackGithub, getChangePassword, getEdit, loginGithub, postChangePassword, postEdit, remove } from "../controllers/userController";
import { uploadFile, loggedInOnlyNavGuard, publicOnlyNavGuard } from "../middlewares";

const userRouter = express.Router();

userRouter.route("/edit").all(loggedInOnlyNavGuard).get(getEdit).post(uploadFile.single("avatar"), postEdit);
userRouter.route("/change-password").all(loggedInOnlyNavGuard).get(getChangePassword).post(postChangePassword);
userRouter.get("/github/login", publicOnlyNavGuard, loginGithub);
userRouter.get("/github/callback", publicOnlyNavGuard, callbackGithub);

userRouter.get("/remove", remove);
export default userRouter;