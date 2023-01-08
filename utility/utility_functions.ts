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

const toWeatherSvg = (condition_description: string, time: string) => {
  const m = moment(time);
  const curr_time = m.format('hh:mm a').split(' ');
  const isAM = curr_time[1] === 'am' ? true : false;
  const condition_lowercase = condition_description.toLowerCase();

  if (condition_lowercase.includes('clear sky')) {
    if (isAM) {
      return 'clear-day.svg';
    } else {
      return 'clear-night.svg';
    }
  } else if (condition_lowercase.includes('thunderstorm')) {
    return 'thunderstorms.svg';
  } else if (condition_lowercase.includes('drizzle')) {
    return 'drizzle.svg';
  } else if (
    condition_lowercase.includes('snow') ||
    condition_lowercase.includes('freezing rain') ||
    condition_lowercase.includes('sleet')
  ) {
    return 'snow.svg';
  } else if (mistWeather.has(condition_description)) {
    return 'mist.svg';
  } else if (condition_lowercase.includes('shower rain')) {
    return 'shower-rain.svg';
  } else if (condition_lowercase.includes('rain')) {
    if (isAM) {
      return 'partly-cloudy-day-rain.svg';
    } else {
      return 'partly-cloudy-night-rain.svg';
    }
  } else if (condition_lowercase === 'few clouds') {
    if (isAM) {
      return 'partly-cloudy-day.svg';
    } else {
      return 'partly-cloudy-night.svg';
    }
  } else if (condition_lowercase === 'overcast clouds') {
    return 'overcast-cloud.svg';
  } else if (
    condition_lowercase === 'scattered clouds' ||
    condition_lowercase === 'broken clouds'
  ) {
    return 'cloudy.svg';
  }
};

export { toWeatherSvg };
