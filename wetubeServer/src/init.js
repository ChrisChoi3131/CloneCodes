import "./db"
import "./models/Video"
import app from "./server";

const port = 3000;

app.listen(port, () => {
  console.info(
    "Server start"
  )
});