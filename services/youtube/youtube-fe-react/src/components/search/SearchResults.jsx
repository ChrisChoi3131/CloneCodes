import { useParams } from 'react-router-dom';

export default function SearchResults() {
  let { videoId } = useParams();
  return (
    <>
      {videoId ? videoId : 'Hot~~🔥'}
    </>
  )
}