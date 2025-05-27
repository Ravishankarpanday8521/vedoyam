import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

export default function SEO({
  title = "Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage",
  description = "Vedoyam is dedicated to promoting Sanskrit language, Vedic knowledge, and Indian cultural heritage through educational resources, daily shlokas, and research materials.",
  keywords = "Vedoyam, Sanskrit, Vedic knowledge, Indian culture, Sanatani heritage, Sanskrit learning, Vedic studies",
  image = "https://vedoyam.com/images/vedoyam logo.png",
  url = "https://vedoyam.com",
  type = "website",
  article,
  breadcrumbs,
  faqData
}: SEOProps) {

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  } : null;

  // Generate FAQ structured data
  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Enhanced Article schema for blog posts
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "author": {
      "@type": "Person",
      "name": article.author || "Vedoyam Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vedoyam",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vedoyam.com/images/vedoyam logo.png"
      }
    },
    "datePublished": article.publishedTime,
    "dateModified": article.modifiedTime || article.publishedTime,
    "articleSection": article.section,
    "keywords": article.tags?.join(", ") || keywords
  } : null;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="author" content="Vedoyam Team" />
      <meta name="publisher" content="Vedoyam" />
      <meta name="copyright" content="© 2024 Vedoyam. All rights reserved." />
      <meta name="rating" content="General" />
      <meta name="distribution" content="Global" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Alternate languages */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="hi" href={url} />
      <link rel="alternate" hrefLang="sa" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Vedoyam - Sanskrit and Vedic Knowledge" />
      <meta property="og:site_name" content="Vedoyam" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="hi_IN" />

      {/* Article specific Open Graph */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime || article.publishedTime} />
          <meta property="article:author" content={article.author || "Vedoyam Team"} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Vedoyam - Sanskrit and Vedic Knowledge" />
      <meta name="twitter:creator" content="@Vedoyam_" />
      <meta name="twitter:site" content="@Vedoyam_" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#4b3d2d" />
      <meta name="msapplication-TileColor" content="#d5bb96" />
      <meta name="application-name" content="Vedoyam" />
      <meta name="apple-mobile-web-app-title" content="Vedoyam" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      {/* DNS Prefetch and Preconnect for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </Head>
  );
}
