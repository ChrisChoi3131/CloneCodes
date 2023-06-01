import { useState, useEffect } from 'react'
import { useYoutubeApi } from '../../contexts/YoutubeApiContext';

export default function ChannelInfo({ channelId, channelTitle }) {
  const [channelImgUrl, setChannelImgUrl] = useState();
  const youtubeApi = useYoutubeApi();
  useEffect(() => {
    async function fetchChannelImgUrl() {
      setChannelImgUrl();
      try {
        const { url } = await youtubeApi.channelImgUrl();
        if (!ignore) {
          setChannelImgUrl(url);
        }
      } catch (error) {
        console.log(error);
      }
    }
    let ignore = false;
    fetchChannelImgUrl()
    return () => {
      ignore = true;
    }
  }, [channelId, youtubeApi])
  return (
    <>
      <img alt={channelTitle} src={channelImgUrl}></img >
      <h3>{channelTitle}</h3>
    </>
  )

}