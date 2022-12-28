import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import AppContext from '../components/context/state';

export default function App({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
