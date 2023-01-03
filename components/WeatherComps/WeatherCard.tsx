import { useContext } from 'react';
import AppContext from '../context/state';
import ClearDaySvg from '../../public/weather_assets/clear-day.svg';
import Image from 'next/image';

const WeatherCard = () => {
  const { currWeatherData } = useContext(AppContext);
  console.log('WeatherCard', currWeatherData);

  return (
    <div>
      <Image
        src='/weather_assets/mist.svg'
        width='100'
        height='100'
        alt='Current Weather Condition Svg'
      />
      <p>WeatherCard placeholder</p>
    </div>
  );
};

export default WeatherCard;
