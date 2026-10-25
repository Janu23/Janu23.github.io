import { useEffect } from 'react';

interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  imagePath: string;
  language: 'en' | 'pt';
  schema?: Record<string, unknown>;
}

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
};

export const usePageMetadata = ({
  title,
  description,
  canonicalPath,
  imagePath,
  language,
  schema,
}: PageMetadata) => {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = new URL(canonicalPath, `${origin}/`).toString();
    const imageUrl = new URL(imagePath, `${origin}/`).toString();

    document.title = title;
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', language === 'pt' ? 'pt_BR' : 'en_US');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existingSchema = document.head.querySelector<HTMLScriptElement>('script[data-page-schema]');
    if (!schema) {
      existingSchema?.remove();
      return;
    }

    const schemaElement = existingSchema ?? document.createElement('script');
    schemaElement.type = 'application/ld+json';
    schemaElement.dataset.pageSchema = 'true';
    schemaElement.text = JSON.stringify(schema);
    if (!existingSchema) document.head.appendChild(schemaElement);
  }, [canonicalPath, description, imagePath, language, schema, title]);
};
