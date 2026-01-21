import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

type OpenGraphType = 'website' | 'article' | 'profile' | 'book';

export type CreateMetadataOptions = {
  title: string;
  description: string;
  image?: string | null;
  url?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  manifest?: string | URL | null;
  keywords?: string[];
  locale?: string;
  type?: OpenGraphType;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

/**
 * Universal metadata builder for Landing Template.
 * Generates SEO-friendly metadata with Open Graph, Twitter, and canonical support.
 */
export function createMetadata({
  title = siteConfig.NAME,
  description = siteConfig.DESCRIPTION,
  image = siteConfig.OG_IMAGE_URL,
  url = siteConfig.URL,
  canonicalUrl = siteConfig.URL,
  noIndex = false,
  manifest,
  keywords = [...siteConfig.KEYWORDS],
  locale = siteConfig.LOCALE,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = siteConfig.AUTHORS.map((author) => author.NAME),
}: CreateMetadataOptions): Metadata {
  const resolvedImage =
    image && !image.startsWith('http')
      ? `${siteConfig.URL}${image.startsWith('/') ? image : `/${image}`}`
      : image || null;

  return {
    title: `${title} - ${siteConfig.NAME}`,
    description,
    keywords: [
      siteConfig.NAME,
      'Landing',
      'Template',
      'Next.js',
      'SEO',
      ...(keywords || []),
    ],
    authors: authors.map((name) => ({ name })),
    metadataBase: new URL(siteConfig.URL),

    openGraph: {
      title,
      description,
      type,
      locale,
      url,
      siteName: siteConfig.NAME,
      ...(resolvedImage && { images: [resolvedImage] }),
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(type === 'article' && authors.length && { authors }),
    },

    twitter: {
      card: resolvedImage ? 'summary_large_image' : 'summary',
      title,
      description,
      creator: siteConfig.CREATOR || siteConfig.HANDLE,
      ...(resolvedImage && { images: [resolvedImage] }),
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },

    ...(canonicalUrl || url
      ? { alternates: { canonical: canonicalUrl ?? url } }
      : {}),

    ...(manifest && { manifest }),
  };
}
