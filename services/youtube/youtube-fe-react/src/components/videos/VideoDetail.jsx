import { useParams } from 'react-router-dom'

export default function VideoDetail() {
  const { videoId } = useParams();
  return (
    <>
      VideoDetail {videoId}
    </>
  )
}