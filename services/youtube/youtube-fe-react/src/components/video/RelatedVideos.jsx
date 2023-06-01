import VideoCard from './VideoCard';

export default function RelatedVideos({ relatedVideos }) {
  return (
    <ul className=''>
      {relatedVideos && relatedVideos.map(video => {
        const videoId = typeof video.id === 'object' ? video.id.videoId : video.id;
        return <VideoCard key={videoId} video={video}></VideoCard>
      }
      )}
    </ul>
  )
}