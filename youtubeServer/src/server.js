import express from "express";
import logger from "morgan";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";

const app = express();

app.use(express.urlencoded({extended : true}));
app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(logger("dev"));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;