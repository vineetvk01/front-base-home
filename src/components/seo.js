import React from 'react';
import Head from 'next/head';

export default function SEO({
  title = 'Frontbase — AI-powered feedback hub',
  description = 'Frontbase is an AI-powered feedback hub where users submit ideas, vote on features, and help teams prioritize what to build next.',
  author = 'Frontbase',
  url = 'https://home.frontbaseapp.com',
  image = 'https://res.cloudinary.com/ditoriefv/image/upload/v1761897650/production/static-images/portal-mockup-image_lipsy7.png',
  siteName = 'Frontbase',
  twitterCard = 'summary_large_image',
  keywords = [
    'AI feedback',
    'feature voting',
    'idea submission',
    'roadmap',
    'feature prioritization',
    'customer feedback',
    'feedback hub',
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