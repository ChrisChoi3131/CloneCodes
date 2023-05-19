import { useParams } from 'react-router-dom';

export default function SearchResults() {
  let { v: videoId } = useParams();
  return (
    <>
      {videoId}
    </>
  )
}