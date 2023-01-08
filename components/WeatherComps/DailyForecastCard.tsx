import { toWeatherSvg } from '../../utility/utility_functions';
import Image from 'next/image';

const DailyForecastCard = ({ weather_condition, temperature, time }) => {
  return (
    <div className='border-2 rounded-lg grid grid-cols-2'>
      <Image
        src={`/weather_assets/${toWeatherSvg(weather_condition, time)}`}
        alt='Current Weather Condition Svg'
      />
    </div>
  );
};

export default DailyForecastCard;
