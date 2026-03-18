/** @jsxImportSource theme-ui */
<<<<<<< HEAD
import { ThemeUIProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import Package from "../sections/package";
=======
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Benefits from '../sections/benefits';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://home.frontbaseapp.com';
>>>>>>> 72f2fbba97f853b904c14a82c22b51512b7fc5c5

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
          <Benefits />
          {/* <SamplePortals /> */}
          <Package />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}
