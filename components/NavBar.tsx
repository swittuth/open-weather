import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <div className='w-full flex border-2 justify-center'>
      <nav className='flex p-5 justify-between items-center max-w-7xl w-full'>
        <div>
          <p>Logo</p>
        </div>
        <SearchBar />
        <div>Placeholder</div>
      </nav>
    </div>
  );
};

export default NavBar;
