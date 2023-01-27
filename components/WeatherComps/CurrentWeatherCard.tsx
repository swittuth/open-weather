import { useContext, useEffect } from 'react';
import WeatherInfoCard from './WeatherInfoCard';
import AppContext from '../context/state';
import { toWeatherSvg } from '../../utility/utility_functions';
import Image from 'next/image';

const CurrentWeatherCard = () => {
  const {
    currWeatherData: { condition_description = '', time = '' },
    imageWeather,
    setImageWeather,
  } = useContext(AppContext);

  useEffect(() => {
    const newImageWeather = toWeatherSvg(condition_description, time);
    setImageWeather(newImageWeather);
  }, [condition_description]);

  return (
    <div className='w-full col-span-3 flex justify-center border-2'>
      <div className='w-4/5 grid grid-cols-2 rounded-xl max-w-2xl'>
        {imageWeather ? (
          <Image
            src={`/weather_assets/${imageWeather}`}
            width='300'
            height='300'
            alt='Current Weather Condition Svg'
            className='m-auto w-full'
          />
        ) : (
          <p className='w-full text-center'>Enter a Location</p>
        )}
        <div className='flex items-center'>
          <WeatherInfoCard />
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
