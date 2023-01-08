import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherInfoCard = () => {
  const {
    currWeatherData: { temp, feels_like, temp_min, temp_max, humidity, speed },
  } = useContext(AppContext);

  return (
    <ul className='flex flex-col h-full w-full justify-center p-4 text-xs'>
      <li className='flex-grow'>Temperature: {temp}</li>
      <li className='flex-grow'>Feels like: {feels_like}</li>
      <li className='flex-grow'>Temp Min: {temp_min}</li>
      <li className='flex-grow'>Temp Max: {temp_max}</li>
      <li className='flex-grow'>Humidity: {humidity}</li>
      <li>Wind Speed: {speed}</li>
    </ul>
  );
};

export default WeatherInfoCard;
