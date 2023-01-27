import HourlyForecastCard from './HourlyForecastCard';
import { useContext, useEffect } from 'react';
import AppContext from '../context/state';
import uuid from 'react-uuid';

const HourlyForecastContainer = () => {
  const {
    currWeatherData: { hourly },
  } = useContext(AppContext);

  console.log('hourly', hourly);

  return (
    <div className='border-2 h-[400px] min-h-min col-span-1 overflow-auto'>
      {hourly.map((obj) => (
        <HourlyForecastCard key={uuid()} />
      ))}
    </div>
  );
};

export default HourlyForecastContainer;
