import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  ogImage?: string;
}

export function createMetadata({ title, description, ogImage }: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}
