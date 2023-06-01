import VideoCard from './VideoCard';

export default function VideoCards({ videos }) {
  return (
    <ul className='grid sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2'>
      {videos && videos.map(video => {
        const videoId = typeof video.id === 'object' ? video.id.videoId : video.id;
        return <VideoCard key={videoId} video={video}></VideoCard>
      }
      )}
    </ul>
  )
}