import DailyForecastCard from './DailyForecastCard';
import AppContext from '../context/state';
import { useContext } from 'react';
import uuid from 'react-uuid';

const DailyForecastContainer = () => {
  const {
    currWeatherData: { daily },
  } = useContext(AppContext);

  console.log('container', daily);

  return (
    <div className='flex gap-1 m-1'>
      {daily &&
        daily.map((obj: any[]) => (
          <DailyForecastCard
            key={uuid()}
            weather_condition={obj.weather[0].description}
            temperature={obj.temp.day}
            time={obj.dt}
          />
        ))}
    </div>
  );
};

export default DailyForecastContainer;
