import VideoCard from './VideoCard';

export default function VideoCards({ videos }) {
  return (
    <ul className='grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2'>
      {videos && videos.map(video => <VideoCard key={video.id} video={video}></VideoCard>)}
    </ul>
  )
}