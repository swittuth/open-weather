import WeatherCard from './WeatherCard';
import DailyForecastContainer from './DailyForecastContainer';
import LocationTags from './LocationTags';
import LocationTitle from './LocationTitle';
import styles from './WeatherContainer.module.css';

const WeatherContainer = () => {
  return (
    <div className={styles.weatherContainer}>
      <LocationTags />
      <LocationTitle />
      <WeatherCard />
      <DailyForecastContainer />
    </div>
  );
};

export default WeatherContainer;
