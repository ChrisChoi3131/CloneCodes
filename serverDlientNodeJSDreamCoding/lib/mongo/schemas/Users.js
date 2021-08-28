import mongoose from 'mongoose';
const { Schema } = mongoose;

const schemaUsers = new Schema({
  userID: String,
  password : String,
  name : String,
  email : String,
  defalutImageURL : String,
});

export default mongoose.model("User", schemaUsers);