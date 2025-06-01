'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

// Google Analytics tracking function
export const gtag = (...args: unknown[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (url: string) => {
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track user engagement
export const trackEngagement = (engagement_time_msec: number) => {
  gtag('event', 'user_engagement', {
    engagement_time_msec,
  });
};

// Track scroll depth
export const trackScrollDepth = (percent: number) => {
  gtag('event', 'scroll', {
    event_category: 'engagement',
    event_label: `${percent}%`,
    value: percent,
  });
};

// Track video interactions
export const trackVideoEvent = (action: 'play' | 'pause' | 'complete', video_title: string) => {
  gtag('event', action, {
    event_category: 'video',
    event_label: video_title,
  });
};

// Track blog interactions
export const trackBlogEvent = (action: 'open' | 'close' | 'language_change', blog_title?: string, language?: string) => {
  gtag('event', action, {
    event_category: 'blog',
    event_label: blog_title || 'blog_interaction',
    custom_parameters: {
      language: language,
    },
  });
};

// Track shloka interactions
export const trackShlokaEvent = (action: 'next' | 'previous' | 'view', shloka_title: string) => {
  gtag('event', action, {
    event_category: 'shloka',
    event_label: shloka_title,
  });
};

// Track contact form submissions
export const trackContactForm = (method: 'email' | 'whatsapp' | 'social') => {
  gtag('event', 'contact_attempt', {
    event_category: 'contact',
    event_label: method,
  });
};

// Analytics component
export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initializeAnalytics = async () => {
      // Load Google Analytics script
      const script1 = document.createElement('script');
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
          custom_map: {
            'custom_parameter_1': 'sanskrit_learning',
            'custom_parameter_2': 'vedic_knowledge'
          }
        });
      `;
      document.head.appendChild(script2);

      // Track scroll depth
      let maxScroll = 0;
      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );

        if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
          maxScroll = scrollPercent;
          trackScrollDepth(scrollPercent);
        }
      };

      // Track time on page
      const startTime = Date.now();
      const handleBeforeUnload = () => {
        const timeOnPage = Date.now() - startTime;
        trackEngagement(timeOnPage);
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    };

    initializeAnalytics();
  }, []);

  useEffect(() => {
    if (pathname && searchParams) {
      const url = pathname + searchParams.toString();
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

// Hook for tracking user interactions
export const useAnalytics = () => {
  return {
    trackEvent,
    trackPageView,
    trackEngagement,
    trackScrollDepth,
    trackVideoEvent,
    trackBlogEvent,
    trackShlokaEvent,
    trackContactForm,
  };
};
