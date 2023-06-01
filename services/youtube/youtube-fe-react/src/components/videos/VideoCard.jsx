import { formatTimeAgo } from '../../util/date';
export default function VideoCard({ video }) {
  const { id, snippet } = video;
  const { publishedAt, title, channelTitle, thumbnails } = snippet
  return (
    <li className=''>
      <img className='w-full' alt={title} src={thumbnails.medium.url} />
      <h3 className='my-1 font-semibold line-clamp-2'>{title}</h3>
      <p className='text-sm opacity-80'>{channelTitle}</p>
      <p className='text-sm opacity-80'>{formatTimeAgo(publishedAt)}</p>
    </li>
  )
}