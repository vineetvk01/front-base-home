/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Benefits from '../sections/benefits';
import Features from '../sections/features';
import Pricing from '../sections/pricing';
import Faq from '../sections/faq';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://home.frontbaseapp.com';

export default function IndexPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Frontbase — Let an AI agent run your cold email outreach"
            description="Frontbase writes your cold email sequences, warms your inboxes, handles replies and books meetings automatically. 14-day free trial, no credit card required."
            canonical={`${SITE_URL}/`}
          />
          <Banner />
          <Benefits />
          <Features />
          <Pricing />
          <Faq />
          {/* <SamplePortals /> */}
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
