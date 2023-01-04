import WeatherCard from './WeatherCard';
import WeatherInfoCard from './WeatherInfoCard';
import { useContext } from 'react';
import AppContext from '../context/state';
import styles from './WeatherContainer.module.css';

const WeatherContainer = () => {
  const { currWeatherData } = useContext(AppContext);
  const { name } = currWeatherData;

  return (
    <div className={`w-full h-full ${styles.weatherContainer}`}>
      <h1>Location Tags</h1>
      <h1>{name}</h1>
      <WeatherCard />
      <WeatherInfoCard />
    </div>
  );
};

export default WeatherContainer;
