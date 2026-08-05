import { useEffect } from 'react';

/**
 * Updates document.title and meta description on route change.
 * @param {{ title: string, description: string }} meta
 */
export default function useDocumentMeta({ title, description }) {
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
  }, [title, description]);
}
