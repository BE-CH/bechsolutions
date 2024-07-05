import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://696a-5-103-62-50.ngrok.io/webinsights.js"
        data-website-id="7753f961-ab88-4096-bfdc-6d06e6c9044f"
        defer
        async
        strategy="afterInteractive"
      />
      <Script src="https://plausible.io/js/plausible.js" data-domain="bechsolutions.dk" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
