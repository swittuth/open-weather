import DailyForecastCard from './DailyForecastCard';
import AppContext from '../context/state';
import { useContext } from 'react';
import uuid from 'react-uuid';

const DailyForecastContainer = () => {
  const {
    currWeatherData: { daily },
  } = useContext(AppContext);

  return (
    <div className='flex gap-1 m-1'>
      {daily &&
        daily.map((obj) => (
          <DailyForecastCard
            key={uuid()}
            weather_condition={obj.weather.description}
            temperature={obj.temp.day}
          />
        ))}
    </div>
  );
};

export default DailyForecastContainer;
