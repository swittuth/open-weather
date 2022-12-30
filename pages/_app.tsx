import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import AppContext from '../components/context/state';

export default function App({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState('');
  const [currWeatherData, setCurrWeatherData] = useState({});

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        currWeatherData,
        setCurrWeatherData,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
