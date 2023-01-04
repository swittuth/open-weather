import WeatherCard from './WeatherCard';
import WeatherInfoCard from './WeatherInfoCard';
import LocationTags from './LocationTags';
import LocationTitle from './LocationTitle';
import styles from './WeatherContainer.module.css';

const WeatherContainer = () => {
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
