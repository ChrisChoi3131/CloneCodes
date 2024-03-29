import { useNavigate } from 'react-router-dom';
import { formatTimeAgo } from '../../util/date';
export default function VideoCard({ video }) {
  const { snippet } = video;
  const videoId = typeof video.id === 'object' ? video.id.videoId : video.id;
  const { publishedAt, title, channelTitle, thumbnails } = snippet;
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/watch/${videoId}`, { state: { video } });
  }

  return (
    <li className='cursor-pointer' onClick={handleClick} >
      <img className='w-full rounded-xl' alt={title} src={thumbnails.medium.url} />
      <h3 className='my-1 font-semibold line-clamp-2'>{title}</h3>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80'>{formatTimeAgo(publishedAt)}</p>
    </li>
  )
}