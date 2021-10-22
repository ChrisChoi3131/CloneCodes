import express from "express";
import { getUploadVideo, postUploadVideo, getEditVideo, postEditVideo, deleteVideo, watchVideo, getSearchVideo } from '../controllers/videoController';
import { loggedInOnlyNavGuard } from '../middlewares';

const videoRouter = express.Router();

videoRouter.route("/upload").all(loggedInOnlyNavGuard).get(getUploadVideo).post(postUploadVideo);
videoRouter.route("/search").all(loggedInOnlyNavGuard).get(getSearchVideo)
videoRouter.all(loggedInOnlyNavGuard).get("/:id([0-9a-f]{24})", watchVideo);
videoRouter.route("/:id(([0-9a-f]{24}))/edit").all(loggedInOnlyNavGuard).get(getEditVideo).post(postEditVideo);
videoRouter.all(loggedInOnlyNavGuard).get("/:id(([0-9a-f]{24}))/delete",deleteVideo);
export default videoRouter;