import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { useNavigate, Link, useParams } from "react-router-dom";


export default function SearchBar({ }) {
  let { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    navigate(`/search/${text}`)
  }

  return (
    <header className='flex items-center w-full p-4 text-2xl h-14'>
      <Link className='flex items-center' to='/'>
        <BsYoutube className='text-3xl text-youtubeRed' />
        <h1 className='font-bold '>YouTube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input className='p-2 outline-none bg-black' onChange={(e) => setText(e.target.value)} value={text} type='search' placeholder='Search' />
        <button ><BsSearch></BsSearch></button>
      </form>
    </header >
  )
}