import WeatherCard from './WeatherCard';
import WeatherInfoCard from './WeatherInfoCard';

const WeatherContainer = () => {
  return (
    <div className='w-full h-full border-red-500 border-2'>
      <WeatherCard />
      <WeatherInfoCard />
    </div>
  );
};

export default WeatherContainer;
