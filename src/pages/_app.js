import { useEffect } from 'react';
import Router from 'next/router';
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
// Variable DM Sans: one file covers weights 100-1000 plus the optical-size axis,
// replacing the three static cuts we used to ship. `opsz` lets the browser adjust
// letterforms between 48px display headings and 14px UI text automatically.
import '@fontsource-variable/dm-sans/opsz.css';

export default function CustomApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // initGA();
  //   // logPageView();
  //   // Router.events.on('routeChangeComplete', logPageView);
  // }, []);

  return <Component {...pageProps} />;
}
