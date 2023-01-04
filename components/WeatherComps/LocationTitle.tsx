import { useContext } from 'react';
import AppContext from '../context/state';

const LocationTitle = () => {
  const {
    currWeatherData: { name },
  } = useContext(AppContext);

  return name ? (
    <p className='text-center'>{name.toUpperCase()}</p>
  ) : (
    <p className='text-center'>N/A</p>
  );
};

export default LocationTitle;
