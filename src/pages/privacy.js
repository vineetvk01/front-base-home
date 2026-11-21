import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Privacy from 'components/privacyHtml';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Frontbase — Privacy Policy"
            description="How Frontbase handles personal data: what we collect about publishers, how we process subscriber lists on their behalf, email measurement, retention and your rights."
          />
          <Privacy />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
