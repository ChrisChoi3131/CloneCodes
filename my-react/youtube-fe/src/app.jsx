import React, { useState, useEffect } from 'react';
import './app.css'
import { API_KEY } from './config'

function App() {
  const [videos, setVideos] = useState([])
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setVideos(result.items)
        console.log(videos);
      })
      .catch(error => console.log('error', error));
  })
  return <div></div>
}
export default App;




