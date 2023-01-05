import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherInfoCard = () => {
  const {
    currWeatherData: { temp, feels_like, temp_min, temp_max, humidity, speed },
  } = useContext(AppContext);

  return (
    <div className='border-2 border-red-200 w-full grid grid-cols-2'>
      <ul className='flex flex-col'>
        <li className='flex-grow'>Temperature: {temp}</li>
        <li className='flex-grow'>Feels like: {feels_like}</li>
        <li className='flex-grow'>Temp Min: {temp_min}</li>
        <li className='flex-grow'>Temp Max: {temp_max}</li>
      </ul>
      <ul className='flex flex-col'>
        <li className='flex-grow'>Humidity: {humidity}</li>
        <li className='flex-grow'>Wind Speed: {speed}</li>
      </ul>
    </div>
  );
};

export default WeatherInfoCard;
