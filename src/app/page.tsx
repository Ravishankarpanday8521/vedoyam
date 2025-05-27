'use client';
import Head from "next/head";
import { useState, useEffect } from "react";

// Import components
import Header from "../components/Header";
import BlogModal from "../components/BlogModal";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ShlokaSection from "../components/ShlokaSection";
import VideoSection from "../components/VideoSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import JoinTeamSection from "../components/JoinTeamSection";
import Footer from "../components/Footer";

// Import dataljwn  ehfouhwe   ghgh 
import { blogContent, shlokas, team, videos } from "../data/content";

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogLanguage, setBlogLanguage] = useState<'hindi' | 'sanskrit' | 'english'>('hindi');
  const [showBlog, setShowBlog] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [currentBlogIndex, setCurrentBlogIndex] = useState(0);

  // Add smooth scrolling functionality
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? shlokas.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === shlokas.length - 1 ? 0 : prev + 1));
  };

  const handleTeamPrev = () => {
    setTeamIndex((prev) => (prev === 0 ? team.length - 1 : prev - 1));
  };

  const handleTeamNext = () => {
    setTeamIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1));
  };

  const handlePrevVideo = () => {
    setVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Head>
        <title>Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage</title>
        <meta name="description" content="Vedoyam is dedicated to promoting Sanskrit language, Vedic knowledge, and Indian cultural heritage through educational resources, daily shlokas, and research materials." />
        <meta name="keywords" content="Vedoyam, Sanskrit, Vedic knowledge, Indian culture, Sanatani heritage, Sanskrit learning, Vedic studies" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vedoyam.com/" />
        <meta property="og:title" content="Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage" />
        <meta property="og:description" content="Explore the beauty of Sanskrit language and Vedic wisdom with Vedoyam&apos;s educational resources and cultural preservation initiatives." />
        <meta property="og:image" content="https://vedoyam.com/images/vedoyam-logo-social.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vedoyam.com/" />
        <meta property="twitter:title" content="Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage" />
        <meta property="twitter:description" content="Explore the beauty of Sanskrit language and Vedic wisdom with Vedoyam&apos;s educational resources and cultural preservation initiatives." />
        <meta property="twitter:image" content="https://vedoyam.com/images/vedoyam-logo-social.png" />

        {/* Enhanced Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vedoyam",
            "alternateName": "वेदोऽयम्",
            "url": "https://vedoyam.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://vedoyam.com/images/vedoyam logo.png",
              "width": 512,
              "height": 512
            },
            "description": "Platform dedicated to preserving and promoting Sanskrit language and Vedic knowledge",
            "foundingDate": "2024",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://vedoyam.com/#contact"
            },
            "sameAs": [
              "https://www.youtube.com/@%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A5%8B%E0%A4%BD%E0%A4%AF%E0%A4%AE%E0%A5%8D",
              "https://www.facebook.com/share/1BSdcKdCPi/",
              "https://www.instagram.com/vedoyam_",
              "https://x.com/Vedoyam_"
            ],
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vedoyam.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Website Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Vedoyam",
            "url": "https://vedoyam.com",
            "description": "Vedoyam is dedicated to promoting Sanskrit language, Vedic knowledge, and Indian cultural heritage",
            "inLanguage": "en-US",
            "copyrightYear": "2024",
            "copyrightHolder": {
              "@type": "Organization",
              "name": "Vedoyam"
            }
          })}
        </script>

        {/* Educational Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Vedoyam",
            "url": "https://vedoyam.com",
            "description": "Educational platform for Sanskrit and Vedic studies",
            "educationalCredentialAwarded": "Sanskrit Knowledge Certification",
            "hasCredential": "Sanskrit Language Expertise",
            "teaches": [
              "Sanskrit Language",
              "Vedic Studies",
              "Indian Philosophy",
              "Sanskrit Grammar",
              "Vedic Literature"
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: "#d5bb96" }}>
        <Header
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          setShowBlog={setShowBlog}
        />

        <BlogModal
          showBlog={showBlog}
          setShowBlog={setShowBlog}
          blogLanguage={blogLanguage}
          setBlogLanguage={setBlogLanguage}
          blogContent={blogContent}
          currentBlogIndex={currentBlogIndex}
          setCurrentBlogIndex={setCurrentBlogIndex}
        />

        <HeroSection setShowBlog={setShowBlog} />

        <AboutSection />

        <ShlokaSection
          shlokas={shlokas}
          current={current}
          setCurrent={setCurrent}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />

        <VideoSection
          videos={videos}
          videoIndex={videoIndex}
          setVideoIndex={setVideoIndex}
          handlePrevVideo={handlePrevVideo}
          handleNextVideo={handleNextVideo}
        />

        <TeamSection
          team={team}
          teamIndex={teamIndex}
          setTeamIndex={setTeamIndex}
          handleTeamPrev={handleTeamPrev}
          handleTeamNext={handleTeamNext}
        />

        <ContactSection />

        <JoinTeamSection setShowBlog={setShowBlog} />

        <Footer setShowBlog={setShowBlog} />
      </div>
    </>
  );
}
