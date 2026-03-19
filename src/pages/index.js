/** @jsxImportSource theme-ui */
import Benefits from "../sections/benefits";
import { ThemeUIProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import Package from "../sections/package";

// import { ThemeUIProvider } from "theme-ui";
// import { StickyProvider } from "../contexts/app/app.provider";
// import theme from "theme";
// import SEO from "components/seo";
// import Layout from "components/layout";
// import Banner from "../sections/banner";

export default function IndexPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO
            title="Frontbase — AI-powered feedback hub for ideas & feature voting"
            description="Frontbase is an AI-powered feedback hub where users submit ideas, vote on features, and help teams prioritize what to build next."
            const
            SITE_URL="http://localhost:3010"
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
