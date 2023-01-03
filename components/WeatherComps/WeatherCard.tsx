import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherCard = () => {
  const { currWeatherData } = useContext(AppContext);

  return (
    <div>
      <p>WeatherCard placeholder</p>
    </div>
  );
};

export default WeatherCard;
