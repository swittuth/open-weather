import { useContext } from 'react';
import AppContext from '../context/state';

const LocationTitle = () => {
  const {
    currWeatherData: { name },
  } = useContext(AppContext);

  return name ? (
    <p className='text-center m-auto'>{name.toUpperCase()}</p>
  ) : (
    <p className='border-2 border-green-400 m-auto'>N/A</p>
  );
};

export default LocationTitle;
