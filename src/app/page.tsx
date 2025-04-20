'use client';
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Home() {
  const shlokas = [
    {
      text: `श्रुतिर्विभिन्ना स्मृत्यश्च भिन्नाः, नैको मुनिर्यस्य वचोऽप्रमाणम् । धर्मस्य तत्वं निहितं गुहायां, महाजनो येन गतः स पन्थाः।।`,
      translation: `श्रुतियाँ भिन्न हैं, स्मृतियाँ भी अलग-अलग हैं; कोई एक मुनि ऐसा नहीं है जिसकी बात अंतिम प्रमाण मानी जाए। धर्म का तत्व गुप्त रूप से हृदय में स्थित है; इसलिए वही मार्ग श्रेष्ठ है जिस पर महान पुरुष चले हैं।`,
    },
    {
      text: `यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता: । यत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः ॥`,
      translation: `जहाँ नारियों की पूजा (सम्मान) होती है, वहाँ देवता निवास करते हैं; और जहाँ उनका सम्मान नहीं होता, वहाँ किए गए सभी कार्य निष्फल हो जाते हैं।`,
    },
    {
      text: `अयं निजः परो वेति गणना लघुचेतसाम् । उदार चरितानां तु वसुधैव कुटुम्बकम्।।`,
      translation: `यह अपना है और वह पराया है — ऐसा विचार छोटे मन वाले लोग करते हैं; उदार हृदय वाले लोगों के लिए तो पूरी पृथ्वी ही एक परिवार है।`,
    },
    {
      text: `अनन्तपारं किल शब्दशास्त्रं , स्वल्पं तथायुर्वहवश्चविघ्ना: । तत्त्वं तातो ग्राह्यमपास्य फल्गु हंसैर्यथा क्षीरमिवाम्बुमध्यात्।।`,
      translation: `शब्दशास्त्र अत्यन्त विस्तृत है और अनन्त है, और जीवन भी छोटा है तथा अनेक विघ्न आते हैं। सत्य को, जैसे दूध में से पानी को निकालते हैं, वैसे ही तत्त्वज्ञानी महात्मा समझते हैं।`,
    },
  ];

  const team = [
    {
      name: "Paresh Thakur",
      position: "Co-Founder, CEO & Chairman",
      image: "/images/Saurav-img.jpg",
    },
    {
      name: "Satyam Mishra",
      position: "Co-Founder, CFO & GM",
      image: "/images/Satyam-img.jpg",
    },
    {
      name: "Ravishankar Panday",
      position: "Co-Founder, COO & MD",
      image: "/images/Ravishankar-img.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);

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

  const videos = [
    { id: "fkY6-Tt_-7g", title: "Intro to Vedoyam" },
    { id: "pUvEEUXxwS0", title: "Why Vedoyam?" },
  ];
  
  const [videoIndex, setVideoIndex] = useState(0);
  
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
        <meta property="og:description" content="Explore the beauty of Sanskrit language and Vedic wisdom with Vedoyam's educational resources and cultural preservation initiatives." />
        <meta property="og:image" content="https://vedoyam.com/images/vedoyam-logo-social.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vedoyam.com/" />
        <meta property="twitter:title" content="Vedoyam - Preserving Vedic Knowledge and Sanskrit Heritage" />
        <meta property="twitter:description" content="Explore the beauty of Sanskrit language and Vedic wisdom with Vedoyam's educational resources and cultural preservation initiatives." />
        <meta property="twitter:image" content="https://vedoyam.com/images/vedoyam-logo-social.png" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Vedoyam",
            "url": "https://vedoyam.com",
            "logo": "https://vedoyam.com/images/vedoyam-logo-social.png",
            "description": "Platform dedicated to preserving and promoting Sanskrit language and Vedic knowledge",
            "sameAs": [
              "https://www.youtube.com/@%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A5%8B%E0%A4%BD%E0%A4%AF%E0%A4%AE%E0%A5%8D",
              "https://www.facebook.com/share/1BSdcKdCPi/",
              "https://www.instagram.com/vedoyam_",
              "https://x.com/Vedoyam_"
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: "#d5bb96" }}>
        {/* Header */}
        <header
          className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-4 gap-4 md:gap-0"
          style={{ backgroundColor: "#d5bb96", color: "black" }}
        >
          {/* Left side logo and name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/vedoyam logo.png"
              alt="Vedoyam Logo"
              width={80}
              height={80}
              className="rounded-sm object-contain w-16 h-16 md:w-20 md:h-20"
              priority
            />
            <span className="text-xl md:text-2xl font-extrabold">Vedoyam</span>
          </div>

          {/* Right side navigation */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 md:gap-8 text-base md:text-lg font-bold">
            <a href="#" className="hover:underline">Home</a>
            <a href="#about" className="hover:underline">About</a>
            
            <div className="relative group">
              <a href="#services" className="hover:underline cursor-pointer font-bold">Services</a>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-[#e9d2ad] shadow-lg rounded-md py-2 z-10 w-40">
                <a href="#shloka" className="block px-4 py-2 hover:bg-[#d5bb96]">Shloka</a>
                <a href="#blog" className="block px-4 py-2 hover:bg-[#d5bb96]">Blog</a>
                <a href="#library" className="block px-4 py-2 hover:bg-[#d5bb96]">Library</a>
                <a href="#videos" className="block px-4 py-2 hover:bg-[#d5bb96]">Videos</a>
                <a href="#research" className="block px-4 py-2 hover:bg-[#d5bb96]">Research</a>
              </div>
            </div>
            
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        {/* Main Content with background image */}
        {/* Main Content with background image */}
      <main
        className="px-6 md:px-20 py-16 text-center bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/Full-Background.jpg')",
        }}
      >
        <h1 className="mb-10 text-3xl text-white drop-shadow-md">
          Welcome to Vedoyam
        </h1>
        <p className="mb-100 text-lg text-white drop-shadow-sm">
          Vedoyam is a platform devoted to the promotion and preservation of Vedic<br />
          and Indian Sanatani culture and heritage. Join us on a journey to explore<br />
          and gain a deeper understanding of this ancient yet timeless legacy
        </p>
      </main>


        {/* About Us Section */}
        <section
          id="about"
          className="bg-[#d5bb96] py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 text-black"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">About Us</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-4">
              Vedoyam is a platform dedicated to the propagation of the Sanskrit language and its heritage. Join us to explore and learn more about this ancient yet timeless language.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-4">
              At Vedoyam, we believe in the immense power of Sanskrit as a foundation for understanding ancient knowledge, philosophy, and culture. Our mission is to provide accessible resources, share profound Sanskrit content, and encourage a deeper connection to this classical language. We aim to open up the rich traditions of Sanskrit to modern audiences, whether you're a beginner or an expert.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-4">
              We offer a range of content, from beginner lessons to advanced studies, focusing on Sanskrit literature, grammar, and its applications in modern-day education. Our goal is to inspire individuals to explore the beauty of Sanskrit, embrace its cultural significance, and understand its relevance in today's world.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify mb-4">
              Our core objective is not only to preserve the heritage of Sanskrit but also to actively contribute to its growth by fostering a new generation of students, scholars, and thinkers. We aim to offer free educational resources in the future to make Sanskrit education accessible to everyone, irrespective of their background.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify">
              Through Vedoyam, we encourage the sharing of new ideas and perspectives on Sanskrit, inviting individuals to reflect, learn, and grow. We believe that understanding Sanskrit will not only enrich one's knowledge but will also deepen one's connection to the roots of civilization, offering a timeless path to intellectual growth.
            </p>
          </div>
          <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
        </section>

        {/* Shloka Section */}
        <section
          id="shloka"
          className="bg-[#d5bb96] text-black py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20"
        >
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#4b3d2d]">Shloka of the Day</h2>

            <div className="relative bg-[#f9f6f1] p-4 sm:p-6 rounded-xl shadow-lg">
              <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed italic">
                "{shlokas[current].text}"
              </p>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base font-light text-gray-700">
                {shlokas[current].translation}
              </p>

              {/* Arrows */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button onClick={handlePrev} className="p-1 sm:p-2 hover:text-[#c49b5f]">
                  <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button onClick={handleNext} className="p-1 sm:p-2 hover:text-[#c49b5f]">
                  <ChevronRight size={24} className="sm:w-7 sm:h-7" />
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
        </section>
        
        {/* Youtube Videos Section */}
        <section id="videos" className="bg-[#d5bb96] py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 text-black">
          <div className="max-w-5xl mx-auto text-center relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#4b3d2d]">Watch Our Videos</h2>

            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg mx-2 sm:mx-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[videoIndex].id}`}
                title={videos[videoIndex].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <button onClick={handlePrevVideo} className="p-1 sm:p-2 hover:text-[#c49b5f]">
                <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
              <button onClick={handleNextVideo} className="p-1 sm:p-2 hover:text-[#c49b5f]">
                <ChevronRight size={24} className="sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
          <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
        </section>

        {/* Meet Our Team Section */}
        <section id="team" className="bg-[#d5bb96] text-black py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Meet Our Team</h2>

            <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg max-w-md mx-auto">
              <Image
                src={team[teamIndex].image}
                alt={team[teamIndex].name}
                width={120}
                height={120}
                className="rounded-full mx-auto border-4 border-[#d5bb96] object-cover w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36"
              />
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">{team[teamIndex].name}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{team[teamIndex].position}</p>

              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button onClick={handleTeamPrev} className="p-1 sm:p-2 hover:text-[#c49b5f]">
                  <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button onClick={handleTeamNext} className="p-1 sm:p-2 hover:text-[#c49b5f]">
                  <ChevronRight size={24} className="sm:w-7 sm:h-7" />
                </button>
              </div>
            </div>
          </div>
          <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
        </section>

        {/* Contact With Us Section */}
        <section
          id="contact"
          className="bg-[#d5bb96] text-black py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact With Us</h2>
            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6">
              Stay connected and follow us on our social platforms!
            </p>

            <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-6">
              <a
                href="https://www.youtube.com/@%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A5%8B%E0%A4%BD%E0%A4%AF%E0%A4%AE%E0%A5%8D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-transform hover:scale-110"
                aria-label="Vedoyam YouTube channel"
              >
                <Youtube size={32} className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              <a
                href="https://www.facebook.com/share/1BSdcKdCPi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-transform hover:scale-110"
                aria-label="Vedoyam Facebook page"
              >
                <Facebook size={32} className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              <a
                href="https://www.instagram.com/vedoyam_?igsh=MWcxdGQ2ZXBhMmU0bw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-transform hover:scale-110"
                aria-label="Vedoyam Instagram profile"
              >
                <Instagram size={32} className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              <a
                href="https://x.com/Vedoyam_?t=wljhdyhmpw-zWReXgO00Fg&s=08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform hover:scale-110"
                aria-label="Vedoyam Twitter profile"
              >
                <Twitter size={32} className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
            </div>
          </div>
          <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
        </section>

        {/* Join Our Team Section */}
        <section
          id="join"
          className="bg-[#d5bb96] text-black py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Join Our Team</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
              Are you passionate about Sanskrit and eager to contribute to spreading its knowledge?
              We are looking for dedicated individuals to join our growing team.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Apply now and become a part of our mission to promote the beauty and wisdom of Sanskrit!
            </p>

            {/* Call Now */}
            <p className="text-base md:text-lg font-semibold mb-4 md:mb-6">
              📞 Call Now: <a href="tel:+917654049394" className="underline hover:text-[#4b3d2d]">+91 7654049394</a>
            </p>

            {/* Contact Button */}
            <a
              href="#contact"
              className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#4b3d2d] text-white rounded-full font-semibold hover:bg-[#7c624a] transition-colors text-sm sm:text-base"
              aria-label="Contact us button"
            >
              Contact Us
            </a>
          </div>
          <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
        </section>

        <footer className="bg-[#4b3d2d] text-white py-6 md:py-8 px-4 sm:px-6 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0">
            {/* Left - Copyright */}
            <p className="text-xs sm:text-sm">
              © 2025 <span className="font-semibold">Vedoyam</span>. All rights reserved.
            </p>

            {/* Right - Links */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <a href="#terms" className="hover:underline">Terms of Use</a>
              <a href="#contact" className="hover:underline">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}