import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className='flex border-2 p-5'>
      <div>
        <p>Logo</p>
      </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
