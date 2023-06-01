import { useParams, useLocation } from 'react-router-dom'
import { useYoutubeApi } from '../contexts/YoutubeApiContext';
import { useEffect, useState } from 'react';
import RelatedVideos from '../components/video/RelatedVideos'
import ChannelInfo from '../components/channel/ChannelInfo';
export default function VideoDetail() {
  const { state: { video } } = useLocation();
  const { id: videoId } = video;
  const youtubeApi = useYoutubeApi();
  const [relatedVideos, setRelatedVideos] = useState();
  const { title, channelId, channelTitle, description } = video.snippet;
  useEffect(() => {
    setRelatedVideos();
    async function fetchRelatedVideos(videoId) {
      try {
        const { data } = await youtubeApi.relatedVideos(videoId);
        if (!ignore) {
          const { items: videos } = data;
          setRelatedVideos(videos);
        }
      }
      catch (error) {
        console.error(error);
      }
    }
    let ignore = false;
    fetchRelatedVideos(videoId);
    return () => {
      ignore = true;
    }
  }, [videoId, youtubeApi])
  return (
    <section className='grid sm:grid-cols-2'>
      <article>
        <iframe title='youtubePlayer' id="player" type="text/html" width="100%" height="640" frameBorder="0"
          src={`http://www.youtube.com/embed/${videoId}`} ></iframe>
        <h2>{title}</h2>
        <ChannelInfo channelId={channelId} channelTitle={channelTitle}></ChannelInfo>
        <p>{description}</p>
      </article>
      <RelatedVideos relatedVideos={relatedVideos}></RelatedVideos>
    </section>
  )
}