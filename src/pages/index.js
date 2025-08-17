import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import SamplePortals from '../sections/sample-portals';

export default function IndexPage() {

  const [isDark, setIsDark] = useState(false);

  // useEffect(() => {
  //   // Check system preference
  //   const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  //   setIsDark(mediaQuery.matches);
    
  //   const handler = (e) => setIsDark(e.matches);
  //   mediaQuery.addListener(handler);
    
  //   return () => mediaQuery.removeListener(handler);
  // }, []);

  const currentTheme = {
    ...theme,
    colors: isDark ? theme.colors.modes.dark : theme.colors
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <StickyProvider>
        <Layout>
          <SEO title="FrontBase Home" />
          <Banner />
          {/* <SamplePortals /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
