import { useContext } from 'react';
import AppContext from '../context/state';

const WeatherInfoCard = () => {
  const { currWeatherData } = useContext(AppContext);
  console.log(currWeatherData);

  return (
    <div>
      <p>Weather Info Card</p>
    </div>
  );
};

export default WeatherInfoCard;
