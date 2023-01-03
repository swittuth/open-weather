import SearchBar from './SearchBar';
import Logo from './Logo';

const NavBar = () => {
  return (
    <div className='w-full h-full flex border-2 justify-center'>
      <nav className='flex p-2 justify-between items-center max-w-7xl w-full'>
        <div>
          <Logo />
        </div>
        <SearchBar />
        <div>Home</div>
      </nav>
    </div>
  );
};

export default NavBar;
