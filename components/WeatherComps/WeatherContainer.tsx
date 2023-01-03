import WeatherCard from './WeatherCard';
import WeatherInfoCard from './WeatherInfoCard';

const WeatherContainer = () => {
  return (
    <div className='w-full h-full border-red-500 border-2 flex flex-col justify-center items-center'>
      <WeatherCard />
      <WeatherInfoCard />
    </div>
  );
};

export default WeatherContainer;
