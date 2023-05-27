import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, Link, useParams } from "react-router-dom";


export default function SearchBar({ }) {
  let { videoId } = useParams();
  const [text, setText] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    setText(videoId || '');
  }, [videoId]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    navigate(`/search/${text}`)
  }

  return (
    <header className='flex items-center w-full h-14'>
      <Link to='/'>
        <BsYoutube className='' />YouTube
      </Link>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setText(e.target.value)} value={text} type='search' placeholder='Search' />
        <button ><BsSearch></BsSearch></button>
      </form>
    </header>
  )
}