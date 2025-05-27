import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = "Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage",
  description = "Vedoyam is dedicated to promoting Sanskrit language, Vedic knowledge, and Indian cultural heritage through educational resources, daily shlokas, and research materials.",
  keywords = "Vedoyam, Sanskrit, Vedic knowledge, Indian culture, Sanatani heritage, Sanskrit learning, Vedic studies",
  image = "https://vedoyam.com/images/vedoyam logo.png",
  url = "https://vedoyam.com",
  type = "website"
}: SEOProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Vedoyam Team" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Vedoyam" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content="@Vedoyam_" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#4b3d2d" />
      <meta name="msapplication-TileColor" content="#d5bb96" />
      <meta name="application-name" content="Vedoyam" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}
