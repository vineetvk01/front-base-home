import { useEffect } from 'react';
import Router from 'next/router';
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // initGA();
  //   // logPageView();
  //   // Router.events.on('routeChangeComplete', logPageView);
  // }, []);

  return <Component {...pageProps} />;
}
