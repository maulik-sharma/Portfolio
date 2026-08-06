import { useEffect } from 'react';

const SITE_ORIGIN = 'https://mauliksharma.org';

/**
 * Updates document.title, meta description, canonical URL, and og:url on route change.
 * @param {{ title: string, description: string, path?: string }} meta
 */
export default function useDocumentMeta({ title, description, path }) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      metaDesc.content = description;
      document.head.appendChild(metaDesc);
    }

    // Update canonical URL
    const canonicalUrl = `${SITE_ORIGIN}${path || window.location.pathname}`;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    // Update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }
  }, [title, description, path]);
}
