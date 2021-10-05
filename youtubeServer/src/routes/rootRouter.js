import express from "express";
import { getJoin, postJoin, login } from "../controllers/userController"
import { homeVideo } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.get("/", homeVideo);
globalRouter.route("/join").get(getJoin).post(postJoin);
globalRouter.get("/login", login);

export default globalRouter;