import express from "express";
import { uploadVideo, getEditVideo, postEditVideo, deleteVideo, watchVideo } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watchVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEditVideo).post(postEditVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;