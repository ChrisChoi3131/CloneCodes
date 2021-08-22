import express from "express";
const routerTweets = express.Router();

routerTweets.get("/", (req,res,next)=>{
  res.send("tweet 전체조회");
});
routerTweets.get("/:userID", (req,res,next)=>{
  res.send("tweet id로 조회");
});
routerTweets.post("/:tweetID", (req,res,next)=>{
  res.send("tweet tweetID 생성");
});
routerTweets.put("/:tweetID", (req,res,next)=>{
  res.send("tweet tweetID 업데이트");
});
routerTweets.delete(":/tweetID", (req,res,next)=>{
  res.send("tweet tweetID 삭제");
});


export default routerTweets;


