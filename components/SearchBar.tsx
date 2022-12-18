import { FaSearchLocation } from 'react-icons/fa';
import { useState } from 'react';

const SearchBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className='w-0 focus-within:w-[500px] transition-all duration-150'>
      <form className='flex items-center justify-center border-2 p-1 rounded-full w-11 h-11 focus-within:w-full transition-all duration-150'>
        <input
          type='text'
          className='outline-0 w-full relative bg-transparent'
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
