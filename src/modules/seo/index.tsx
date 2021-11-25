import { NextSeo } from 'next-seo';
import React from 'react';

export const SEO = () => {
  const content = 'Lightning Channel Explorer';
  const title = 'Lightning Channel Explorer';
  const image = 'og.png';

  return (
    <NextSeo
      title={title}
      description={content}
      openGraph={{
        title,
        description: content,
        images: [
          {
            url: image,
            width: 1280,
            height: 672,
            alt: title,
          },
        ],
        site_name: title,
      }}
    />
  );
};
