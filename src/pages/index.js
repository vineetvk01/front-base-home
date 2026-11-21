/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { ThemeUIProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import ProductPreview from '../sections/product-preview';
import Benefits from '../sections/benefits';
import Features from '../sections/features';
import Pricing from '../sections/pricing';
import Faq from '../sections/faq';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://home.frontbaseapp.com';

export default function IndexPage() {
  // Arriving from /privacy or /terms as "/#pricing", the browser's own jump to
  // the anchor happens before this page's sections have rendered, so it ends up
  // back at the top. Re-run the scroll once after mount, when the targets exist.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // One frame is not always enough — the hero video and the preview frame can
    // still be settling — so give layout a brief moment before measuring.
    const timer = window.setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Frontbase — Run your newsletter and pay only for the emails you send"
            description="Frontbase is a newsletter platform with unlimited subscribers on every plan. Write, schedule, host your archive and automate welcome sequences — and pay per email sent, not per subscriber. From $19 a month."
            canonical={`${SITE_URL}/`}
          />
          <Banner />
          <ProductPreview />
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
