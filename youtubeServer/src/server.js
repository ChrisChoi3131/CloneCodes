import express from "express";
import session from "express-session"
import logger from "morgan";
import globalRouter from "./routes/rootRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";
import { localsMiddleware } from "./middlewares";
import MongoStore from 'connect-mongo'

const app = express();
const sess = {
  secret: 'keyboard cat',
  cookie: {},
  resave: false,
  saveUninitialized: false,  
  store: MongoStore.create({ mongoUrl: process.env.DB_URL})
}
app.use(session(sess));
app.use(express.urlencoded({extended : true}));
app.set("view engine", "pug");
app.set("views", process.cwd()+"/src/views");
app.use(localsMiddleware);
app.use(logger("dev"));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;