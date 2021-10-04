import mongoose from "mongoose"
mongoose.connect('mongodb://127.0.0.1:27017/wetube');
mongoose.connection.on('error', err => {
  console.log("❌ error connected to db")
});
mongoose.connection.once('open', () => {
  console.log("✅ connected to db")
});