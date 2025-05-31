import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import SamplePortals from '../sections/sample-portals';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="FrontBase Home" />
          <Banner />
          <SamplePortals />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
