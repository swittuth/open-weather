import WeatherCard from './WeatherCard';
import WeatherInfoCard from './WeatherInfoCard';
import LocationTags from './LocationTags';
import LocationTitle from './LocationTitle';
import { useContext } from 'react';
import AppContext from '../context/state';
import styles from './WeatherContainer.module.css';

const WeatherContainer = () => {
  const { currWeatherData } = useContext(AppContext);
  const { name } = currWeatherData;

  return (
    <div className={styles.weatherContainer}>
      <LocationTags />
      <LocationTitle />
      <WeatherCard />
      <WeatherInfoCard />
    </div>
  );
};

export default WeatherContainer;
