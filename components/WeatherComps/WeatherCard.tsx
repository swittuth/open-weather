import { useContext, useEffect } from 'react';
import AppContext from '../context/state';
import Image from 'next/image';
import moment from 'moment';

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
    const m = moment(time);
    const curr_time = m.format('hh:mm a').split(' ');
    const isAM = curr_time[1] === 'am' ? true : false;

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
