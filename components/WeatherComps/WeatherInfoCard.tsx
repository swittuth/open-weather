import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherInfoCard = () => {
  const {
    currWeatherData: { temp, feels_like, temp_min, temp_max, humidity, speed },
  } = useContext(AppContext);

  return (
    <div className='border-2 border-red-200 w-full grid grid-cols-2'>
      <p>1st column</p>
      <p>2nd column</p>
    </div>
  );
};

export default WeatherInfoCard;
