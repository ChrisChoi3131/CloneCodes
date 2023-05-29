import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../../contexts/YoutubeApiContext'
export default function SearchResults() {
  let { keyword } = useParams();
  const youtubeApi = useYoutubeApi();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    //todo Replace this logic to  React Query
    async function fetchSearch() {
      setVideos([]);
      try {
        const { data } = await youtubeApi.search(keyword);
        console.log(data);
        if (!ignore) {
          const { items } = data
          setVideos(items);
        }
      } catch (error) {
        console.error(error);
      }
    }
    let ignore = false;
    fetchSearch();
    return () => {
      ignore = true;
    }
  }, [keyword]);
  return (
    <>
      {videos.map(({ snippet }) => {
        return snippet.title
      })}
    </>
  )
}