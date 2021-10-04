import express from "express";
import { getUploadVideo, postUploadVideo, getEditVideo, postEditVideo, deleteVideo, watchVideo } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUploadVideo).post(postUploadVideo);
videoRouter.get("/:id([0-9a-f]{24})", watchVideo);
videoRouter.route("/:id(([0-9a-f]{24}))/edit").get(getEditVideo).post(postEditVideo);
videoRouter.get("/:id(([0-9a-f]{24}))/delete",deleteVideo);
export default videoRouter;