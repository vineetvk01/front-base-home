import React from 'react';
import Head from 'next/head';

export default function SEO({
  title = 'Frontbase — Newsletter platform priced per email sent',
  description = 'Frontbase is a newsletter platform with unlimited subscribers on every plan. Write, schedule, host your archive and automate welcome sequences — and pay per email sent, not per subscriber.',
  author = 'Frontbase',
  url = 'https://home.frontbaseapp.com',
  // The source asset is a 1828x378 banner (4.84:1). LinkedIn, X and Slack all
  // unfurl at roughly 1.91:1, which would centre-crop it and lose the outer
  // thirds, so the Cloudinary transform pads it to 1200x630 — b_auto matches
  // the card's own off-white edge instead of seaming against pure white.
  // Remove "c_pad,w_1200,h_630,b_auto/" to serve the original framing.
  image = 'https://res.cloudinary.com/ditoriefv/image/upload/c_pad,w_1200,h_630,b_auto/v1795313203/production/static-images/share_card_frontbaseapp.png',
  siteName = 'Frontbase',
  twitterCard = 'summary_large_image',
  keywords = [
    'newsletter platform',
    'newsletter software',
    'email newsletter',
    'newsletter automation',
    'send newsletters',
    'pay per email sent',
    'unlimited subscribers',
  ],
  canonical,
  meta = [],
}) {
  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: keywords.join(', '),
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: canonical || url,
    },
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:site_name',
      content: siteName,
    },
    {
      name: 'twitter:card',
      content: twitterCard,
    },
    {
      name: 'twitter:creator',
      content: author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: image,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      {metaData.map((item, i) => {
        if (item.name) {
          return <meta key={`meta-${item.name}-${i}`} name={item.name} content={item.content} />;
        }
        if (item.property) {
          return <meta key={`meta-${item.property}-${i}`} property={item.property} content={item.content} />;
        }
        return null;
      })}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [
    {
      name: `viewport`,
      content: `width=device-width, initial-scale=1`,
    },
  ],
};