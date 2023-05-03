import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
// pages/_app.js

// Font files can be colocated inside of `pages`
// const myFont = localFont({ src: './SmileySans-Oblique.otf.woff2' });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main >
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
