import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../../contexts/YoutubeApiContext'
import VideoCards from '../videos/VideoCards';

export default function SearchResults() {
  let { keyword } = useParams();
  const youtubeApi = useYoutubeApi();
  const [videos, setVideos] = useState();
  useEffect(() => {
    //TODO Replace this logic to  React Query
    async function fetchSearch() {
      try {
        const { data } = await youtubeApi.search(keyword);
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
      {<VideoCards videos={videos} />}
    </>
  )
}