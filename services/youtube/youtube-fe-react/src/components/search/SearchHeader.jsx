import { BsYoutube, BsSearch } from 'react-icons/bs'
export default function SearchBar({ }) {
  return (
    <header className='flex'>
      <BsYoutube className='flex-none'></BsYoutube>
      YouTube
      <form>
        <input type='search' placeholder='Search' />
        <button><BsSearch></BsSearch></button>
      </form>
    </header>
  )
}