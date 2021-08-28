import express from "express";
import { uploadVideo, editVideo, deleteVideo, seeVideo  } from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id", seeVideo);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;