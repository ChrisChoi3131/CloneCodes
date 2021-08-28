import express from "express";
import path from 'path';
import routerTweets from "./router/tweets.js";
import routerUsers from "./router/Users.js";
import db from "./lib/mongo/mongo.js";
import session from 'express-session'
import MongoStore from 'connect-mongo'

const app = express();
const port = 3000;
const router = express.Router();
const __dirname = path.resolve();

db();

app.listen(port, ()=>{
  console.log("Server start");
});
app.use(session({
  secret: 'foo',
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/dwitter' })
}));

app.use(express.static(path.join(__dirname, "public")));
app.use("/tweets", routerTweets);
app.use("/users", routerUsers);
