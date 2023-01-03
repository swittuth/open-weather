import Head from 'next/head';
import NavBar from '../components/NavBar';
import WeatherContainer from '../components/WeatherComps/WeatherContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>WeatherUp</title>
        <link rel='shortcut icon' href='../public/weatherup_logo.ico' />
      </Head>
      <header className='h-[8%]'>
        <NavBar />
      </header>
      <main className='h-[92%]'>
        <WeatherContainer />
      </main>
    </>
  );
}
