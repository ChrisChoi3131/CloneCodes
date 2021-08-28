import express from "express";
import logger from "morgan";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";


const app = express();
const port = 3000;
app.use(logger("dev"));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.listen(port, () => {
  console.info(
    "Server start"
  )
});