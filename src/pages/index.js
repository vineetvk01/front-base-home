/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';

export default function IndexPage() {
 
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="FrontBase Home" />
          <Banner />
          {/* <SamplePortals /> */}
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
