'use client';

interface HeroSectionProps {
  setShowBlog: (show: boolean) => void;
}

export default function HeroSection({ setShowBlog }: HeroSectionProps) {
  return (
    <main
      className="px-6 md:px-20 py-16 text-center bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/Full-Background.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main heading with enhanced styling */}
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
            Welcome to Vedoyam
          </span>
        </h1>

        {/* Subtitle with Sanskrit text */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-yellow-200 drop-shadow-lg font-semibold mb-2">
            वेदोऽयम् - यह वेद है
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        {/* Main description */}
        <p className="mb-10 text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg leading-relaxed max-w-5xl mx-auto">
          Vedoyam is a platform devoted to the promotion and preservation of Vedic
          and Indian Sanatani culture and heritage. Join us on a journey to explore
          and gain a deeper understanding of this ancient yet timeless legacy
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setShowBlog(true)}
            className="bg-gradient-to-r from-[#4b3d2d] to-[#7c624a] text-white px-10 py-4 rounded-full font-semibold hover:from-[#7c624a] hover:to-[#4b3d2d] transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-yellow-400/30 hover:border-yellow-400/60"
          >
            🔱 Explore Sanskrit Journey
          </button>

          <a
            href="#about"
            className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white/30 hover:border-white/60"
          >
            📚 Learn More
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
