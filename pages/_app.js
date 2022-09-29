import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://plausible.io/js/plausible.js" data-domain="bechsolutions.dk" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
