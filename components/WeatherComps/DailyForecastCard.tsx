import { toWeatherSvg } from '../../utility/utility_functions';
import moment from 'moment';
import Image from 'next/image';

const DailyForecastCard = ({ weather_condition, temperature, time }) => {
  const m = moment(time);

  return (
    <div className='border-2 rounded-lg flex flex-col w-full'>
      <div className='min-w-fit border-2'>
        <p>DAY, DATE</p>
      </div>
      <Image
        src={`/weather_assets/${toWeatherSvg(
          weather_condition,
          m.format('hh:mm a')
        )}`}
        alt='Current Weather Condition Svg'
        width='80'
        height='80'
        className='m-auto min-w-min'
      />
      <div className='border-2'>
        <p>Condition</p>
      </div>
    </div>
  );
};

export default DailyForecastCard;
