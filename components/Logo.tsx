import Image from 'next/image';
import logoSvg from '../public/weatherup_logo.png';

const Logo = () => {
  return <Image width={80} alt='WeatherUp logo' src={logoSvg} />;
};

export default Logo;
