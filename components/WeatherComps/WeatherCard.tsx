import { useContext, useEffect } from 'react';
import WeatherInfoCard from './WeatherInfoCard';
import AppContext from '../context/state';
import Image from 'next/image';
import moment from 'moment';

const mistWeather = new Set([
  'mist',
  'Smoke',
  'Haze',
  'sand/ dust whirls',
  'fog',
  'sand',
  'dust',
  'volcanic ash',
  'squalls',
  'tornado',
]);

const WeatherCard = () => {
  const {
    currWeatherData: { condition_description = '', time = '' },
    imageWeather,
    setImageWeather,
  } = useContext(AppContext);

  useEffect(() => {
    const m = moment(time);
    const curr_time = m.format('hh:mm a').split(' ');
    const isAM = curr_time[1] === 'am' ? true : false;
    const condition_lowercase = condition_description.toLowerCase();

    if (condition_lowercase.includes('clear sky')) {
      if (isAM) {
        setImageWeather('clear-day.svg');
      } else {
        setImageWeather('clear-night.svg');
      }
    } else if (condition_lowercase.includes('thunderstorm')) {
      setImageWeather('thunderstorms.svg');
    } else if (condition_lowercase.includes('drizzle')) {
      setImageWeather('drizzle.svg');
    } else if (
      condition_lowercase.includes('snow') ||
      condition_lowercase.includes('freezing rain') ||
      condition_lowercase.includes('sleet')
    ) {
      setImageWeather('snow.svg');
    } else if (mistWeather.has(condition_description)) {
      setImageWeather('mist.svg');
    } else if (condition_lowercase.includes('shower rain')) {
      setImageWeather('shower-rain.svg');
    } else if (condition_lowercase.includes('rain')) {
      if (isAM) {
        setImageWeather('partly-cloudy-day-rain.svg');
      } else {
        setImageWeather('partly-cloudy-night-rain.svg');
      }
    } else if (condition_lowercase === 'few clouds') {
      if (isAM) {
        setImageWeather('partly-cloudy-day.svg');
      } else {
        setImageWeather('partly-cloudy-night.svg');
      }
    } else if (condition_lowercase === 'overcast clouds') {
      setImageWeather('overcast-cloud.svg');
    } else if (
      condition_lowercase === 'scattered clouds' ||
      condition_lowercase === 'broken clouds'
    ) {
      setImageWeather('cloudy.svg');
    }

    // not ensured that the description will always have length of 2 or less
  }, [condition_description]);

  return (
    <div className='flex border-2 justify-center'>
      <div className='w-4/5 flex'>
        {imageWeather ? (
          <Image
            src={`/weather_assets/${imageWeather}`}
            width='300'
            height='300'
            alt='Current Weather Condition Svg'
          />
        ) : (
          <p>Enter a Location</p>
        )}
        <WeatherInfoCard />
      </div>
    </div>
  );
};

export default WeatherCard;
