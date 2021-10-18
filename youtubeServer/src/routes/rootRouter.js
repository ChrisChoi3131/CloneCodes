import express from "express";
import { getJoin, postJoin, getLogin, postLogin,getLogout } from "../controllers/userController"
import { homeVideo } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.get("/", homeVideo);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/logout").get(getLogout);

export default globalRouter;