import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherInfoCard = () => {
  const {
    currWeatherData: { feels_like, temp_min, temp_max, humidity, temp },
  } = useContext(AppContext);

  return (
    <div>
      <p>Weather Info Card</p>
    </div>
  );
};

export default WeatherInfoCard;
