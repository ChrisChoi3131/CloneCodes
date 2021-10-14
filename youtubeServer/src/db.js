import mongoose from "mongoose"
mongoose.connect(process.env.DB_URL);
mongoose.connection.on('error', err => {
  console.log("❌ error connected to db")
});
mongoose.connection.once('open', () => {
  console.log("✅ connected to db")
});