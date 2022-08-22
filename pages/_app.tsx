import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.localStorage.setItem(
      'tokensPrice',
      JSON.stringify({
        'n-kobe': 0.3,
        'n-harden': 0.3,
        'n-durant': 0.3,
        'n-irvin': 0.3,
        'n-anteto': 0.3,
        'n-harden-2': 0.3,
      })
    );
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
