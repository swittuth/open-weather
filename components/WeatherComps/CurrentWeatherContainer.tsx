import CurrentWeatherCard from './CurrentWeatherCard';
import HourlyForecastContainer from './HourlyForecastContainer';

const CurrentWeatherContainer = () => {
  return (
    <div className='grid grid-cols-4 w-full'>
      <CurrentWeatherCard />
      <HourlyForecastContainer />
    </div>
  );
};

export default CurrentWeatherContainer;
