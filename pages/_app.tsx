import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import AppContext from '../components/context/state';

export default function App({ Component, pageProps }: AppProps) {
  const [nameCtx, setNameCtx] = useState('default');

  return (
    <AppContext.Provider value={{ nameCtx, setNameCtx }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
