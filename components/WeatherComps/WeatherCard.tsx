import { useContext, useEffect } from 'react';
import AppContext from '../context/state';
import Image from 'next/image';

const WeatherCard = () => {
  const { currWeatherData, imageWeather, setImageWeather } =
    useContext(AppContext);
  const {
    condition_description = '',
    feels_like,
    name,
    time = '',
    temp_min,
    temp_max,
    humidity,
    temp,
  } = currWeatherData;

  useEffect(() => {
    // need to be able to detect weather condition in order to display svg
    const desc_arr = condition_description.split(' ');
    const time_arr = (time + '').split(' ');
    console.log(time_arr);
    if (desc_arr.length === 1) {
      const noun = desc_arr[0];
      if (noun === 'rain') {
      } else if (noun === 'snow') {
      } else if (noun === 'mist') {
      } else if (noun === 'thunderstorm') {
      }
    } else if (desc_arr.length === 2) {
      const [adj, noun] = desc_arr;
    }
  }, [condition_description]);

  return (
    <div>
      <Image
        src='/weather_assets/mist.svg'
        width='300'
        height='300'
        alt='Current Weather Condition Svg'
      />
    </div>
  );
};

export default WeatherCard;
