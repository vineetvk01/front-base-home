/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://home.frontbaseapp.com';

export default function IndexPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Frontbase — AI-powered feedback hub for ideas & feature voting"
            description="Frontbase is an AI-powered feedback hub where users submit ideas, vote on features, and help teams prioritize what to build next."
            canonical={`${SITE_URL}/`}
          />
          <Banner />
          {/* <SamplePortals /> */}
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
