import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
}

export const SEO: React.FC<SeoProps> = ({
  title,
  description,
  canonicalPath = '/',
  image = 'https://sistersblessedtreats.com/images/hero_signature_cake.jpg',
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = `${title} | Sisters Blessed Treats`;
    document.title = fullTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Canonical Link & og:url
    const siteUrl = 'https://sistersblessedtreats.com';
    const fullCanonicalUrl = `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', fullCanonicalUrl);

    // 4. Update Open Graph Tags
    const setMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', fullCanonicalUrl);
    setMetaProperty('og:image', image);

    // 5. Update Twitter Card Tags
    const setMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaName('twitter:title', fullTitle);
    setMetaName('twitter:description', description);
    setMetaName('twitter:image', image);
  }, [title, description, canonicalPath, image]);

  return null;
};

