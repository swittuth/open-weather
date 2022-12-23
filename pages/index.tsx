import Head from 'next/head';
import { Inter } from '@next/font/google';
import NavBar from '../components/NavBar';

const api: string =
  'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=46851850e98217dd4c7f75597b6dc9dd';

export default function Home() {
  async function fetchWeatherData() {
    const data = await fetch(api).then((res) => res.json());
  }
  fetchWeatherData();

  return (
    <>
      <Head>
        <title>WeatherUp</title>
        <link rel='shortcut icon' href='../public/weatherup_logo.ico' />
      </Head>
      <header>
        <NavBar />
      </header>
      <main></main>
    </>
  );
}
