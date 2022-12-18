import { FaSearchLocation } from 'react-icons/fa';
import { useState } from 'react';

const SearchBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className='w-[500px] bg-black'>
      <form className='flex gap-1 items-center border-2 rounded-full p-2 w-10 h-10 focus-within:w-full'>
        <input
          type='text'
          className='outline-0 w-full'
          placeholder='Enter location'
        />
        <button
          className='bg-slate-200 p-2 w-8 h-8 rounded-full hover:bg-slate-300 transition-colors duration-150 border-0 relative'
          aria-label='submit-search'
        >
          <FaSearchLocation />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
