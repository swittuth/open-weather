import { useContext, useEffect } from 'react';
import AppContext from '../context/state';
import ClearDaySvg from '../../public/weather_assets/clear-day.svg';
import Image from 'next/image';

const WeatherCard = () => {
  const { currWeatherData } = useContext(AppContext);
  const {
    condition_description,
    feels_like,
    name,
    time,
    temp_min,
    temp_max,
    humidity,
    temp,
  } = currWeatherData;
  // console.log('WeatherCard', currWeatherData);

  useEffect(() => {
    // need to be able to detect weather condition in order to display svg
  }, [currWeatherData]);

  return (
    <div>
      <Image
        src='/weather_assets/mist.svg'
        width='300'
        height='300'
        alt='Current Weather Condition Svg'
      />
    </div>
  );
};

export default WeatherCard;
