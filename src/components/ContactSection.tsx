'use client';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#d5bb96] to-[#c49b5f] text-black py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b3d2d]">Contact With Us</h2>
          <div className="w-24 h-1 bg-[#8b6914] mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl mb-8">
          <p className="text-lg md:text-xl mb-8 text-[#4b3d2d] font-semibold">
            Stay connected and follow us on our social platforms!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <a
              href="https://www.youtube.com/@%E0%A4%B5%E0%A5%87%E0%A4%A6%E0%A5%8B%E0%A4%BD%E0%A4%AF%E0%A4%AE%E0%A5%8D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-all duration-300 hover:scale-105 group"
              aria-label="Vedoyam YouTube channel"
            >
              <Youtube size={40} className="text-red-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700">YouTube</span>
            </a>
            
            <a
              href="https://www.facebook.com/share/1BSdcKdCPi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 group"
              aria-label="Vedoyam Facebook page"
            >
              <Facebook size={40} className="text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700">Facebook</span>
            </a>
            
            <a
              href="https://www.instagram.com/vedoyam_?igsh=MWcxdGQ2ZXBhMmU0bw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-all duration-300 hover:scale-105 group"
              aria-label="Vedoyam Instagram profile"
            >
              <Instagram size={40} className="text-pink-500 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700">Instagram</span>
            </a>
            
            <a
              href="https://x.com/Vedoyam_?t=wljhdyhmpw-zWReXgO00Fg&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 group"
              aria-label="Vedoyam Twitter profile"
            >
              <Twitter size={40} className="text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
    </section>
  );
}
