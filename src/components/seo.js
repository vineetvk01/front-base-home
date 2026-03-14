import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = 'Frontbase is a one-stop client portal solution to manage customers, automate workflows, and interact with clients seamlessly.',
  author = 'Frontbase Pvt Ltd',
  meta,
  title = 'Frontbase - Client Portal Solution',
}) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
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