'use client';
import Image from "next/image";

import { ChevronRight, Menu, X, BookOpen, Video, Search, Phone } from "lucide-react";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setShowBlog: (show: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen, setShowBlog }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20 py-4 gap-4 md:gap-0 shadow-lg"
      style={{ backgroundColor: "#d5bb96", color: "black" }}
    >
      {/* Left side logo and name */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/vedoyam logo.png"
          alt="Vedoyam Logo"
          width={80}
          height={80}
          className="rounded-full object-cover w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-105 border-2 border-[#4b3d2d]"
          priority
        />
        <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#4b3d2d] to-[#8b6914] bg-clip-text text-transparent">
          Vedoyam
        </span>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-[#c49b5f] transition-colors"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation */}
      <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 text-base md:text-lg font-bold w-full md:w-auto mt-4 md:mt-0`}>
        <a href="#" className="hover:text-[#4b3d2d] transition-colors duration-300 hover:scale-105 transform">Home</a>
        <a href="#about" className="hover:text-[#4b3d2d] transition-colors duration-300 hover:scale-105 transform">About</a>

        <div className="relative group">
          <button className="hover:text-[#4b3d2d] transition-colors duration-300 hover:scale-105 transform cursor-pointer font-bold flex items-center gap-1">
            Services
            <ChevronRight size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-xl rounded-lg py-3 z-20 w-48 border border-[#d5bb96]">
            <a href="#shloka" className="flex items-center gap-2 px-4 py-2 hover:bg-[#f9f6f1] transition-colors">
              <BookOpen size={16} />
              Shloka
            </a>
            <button
              onClick={() => setShowBlog(true)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#f9f6f1] transition-colors w-full text-left"
            >
              <Search size={16} />
              Sanskrit Journey Blog
            </button>
            <a href="#library" className="flex items-center gap-2 px-4 py-2 hover:bg-[#f9f6f1] transition-colors">
              <BookOpen size={16} />
              Library
            </a>
            <a href="#videos" className="flex items-center gap-2 px-4 py-2 hover:bg-[#f9f6f1] transition-colors">
              <Video size={16} />
              Videos
            </a>
            <a href="#research" className="flex items-center gap-2 px-4 py-2 hover:bg-[#f9f6f1] transition-colors">
              <Search size={16} />
              Research
            </a>
          </div>
        </div>

        <a href="#contact" className="hover:text-[#4b3d2d] transition-colors duration-300 hover:scale-105 transform flex items-center gap-1">
          <Phone size={16} />
          Contact
        </a>
      </nav>
    </header>
  );
}
