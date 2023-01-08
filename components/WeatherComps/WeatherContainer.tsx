import WeatherCard from './WeatherCard';
import WeatherInfoCard from './WeatherInfoCard';
import DailyForecastCard from './DailyForecastCard';
import LocationTags from './LocationTags';
import LocationTitle from './LocationTitle';
import styles from './WeatherContainer.module.css';

const WeatherContainer = () => {
  return (
    <div className={styles.weatherContainer}>
      <LocationTags />
      <LocationTitle />
      <WeatherCard />
      <DailyForecastCard />
    </div>
  );
};

export default WeatherContainer;
