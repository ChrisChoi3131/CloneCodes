import { useEffect, useState } from "react";
import "./app.css"

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxresult=25&key=AIzaSyDbNZ55SmXb8aNX4iSRMwEZPOf2_gu6NGw", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  })
  return <div></div>
}
export default App;




