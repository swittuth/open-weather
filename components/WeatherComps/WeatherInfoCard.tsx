import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherInfoCard = () => {
  const { currWeatherData } = useContext(AppContext);
  const { feels_like, name, temp_min, temp_max, humidity, temp } =
    currWeatherData;

  return (
    <div>
      <p>Weather Info Card</p>
    </div>
  );
};

export default WeatherInfoCard;
