import mongoose from 'mongoose';
import { nanoid } from 'nanoid'
const { Schema } = mongoose;

const schemaTweets = new Schema({
  tweetKey: {
    type : String,
    default : () => nanoid()
  },
  userID : String,
  contents : String,
});

export default mongoose.model("Tweet", schemaTweets);