import { useContext } from 'react';
import AppContext from '../components/context/state';
import Spinner from '../components/Spinner';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import WeatherContainer from '../components/WeatherComps/WeatherContainer';

export default function Home() {
  const { loading } = useContext(AppContext);

  const renderSpinner = () => {
    return (
      <div className='h-full w-full flex items-center justify-center'>
        <Spinner />
      </div>
    );
  };

  const renderWeatherContainer = () => {
    if (loading) return renderSpinner();
    return <WeatherContainer />;
  };

  return (
    <>
      <Head>
        <title>WeatherUp</title>
        <link rel='shortcut icon' href='../public/weatherup_logo.ico' />
      </Head>
      <header className='h-[8%]'>
        <NavBar />
      </header>
      <main className='h-[92%]'>{renderWeatherContainer()}</main>
    </>
  );
}
