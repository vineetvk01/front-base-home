import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Terms from 'components/termsHtml';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Frontbase — Terms of Service"
            description="The terms that govern use of Frontbase: plans and send-based billing, cancellation and refunds, ownership of your content and list, the rules for sending email, and our liability."
          />
          <Terms />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
