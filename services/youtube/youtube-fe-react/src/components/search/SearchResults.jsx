import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SearchResults() {
  let { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      setVideos([]);
      const searchResponse = await fetch(`/videos/${videoId ? 'search' : 'popular'}.json`);
      if (searchResponse.ok && !ignore) {
        const { items } = await searchResponse.json();
        setVideos(items);
      }
    }
    let ignore = false;
    fetchSearch();
    return () => {
      ignore = true;
    }
  }, [videoId]);
  return (
    <>
      {videos.map(({ snippet }) => {
        return snippet.title
      })}
    </>
  )
}