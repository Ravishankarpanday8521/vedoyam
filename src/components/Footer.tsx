'use client';
import { BookOpen, Phone } from "lucide-react";

interface FooterProps {
  setShowBlog: (show: boolean) => void;
}

export default function Footer({ setShowBlog }: FooterProps) {
  return (
    <footer className="bg-gradient-to-r from-[#4b3d2d] to-[#3a2f22] text-white py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - About */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-12 h-12 bg-[#8b6914] rounded-full flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Vedoyam</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Preserving and promoting Sanskrit language and Vedic knowledge for future generations.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#shloka" className="block text-sm text-gray-300 hover:text-white transition-colors">Daily Shloka</a>
              <a href="#videos" className="block text-sm text-gray-300 hover:text-white transition-colors">Videos</a>
              <button 
                onClick={() => setShowBlog(true)}
                className="block text-sm text-gray-300 hover:text-white transition-colors w-full"
              >
                Sanskrit Journey
              </button>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone size={16} />
                <a href="tel:+917654049394" className="hover:text-white transition-colors">+91 7654049394</a>
              </p>
              <p>Follow us on social media</p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright and Links */}
        <div className="border-t border-gray-600 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-3 md:space-y-0">
          <p className="text-xs sm:text-sm text-gray-300">
            © 2025 <span className="font-semibold text-white">Vedoyam</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-300">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
