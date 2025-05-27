'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Shloka {
  text: string;
  translation: string;
}

interface ShlokaSectionProps {
  shlokas: Shloka[];
  current: number;
  setCurrent: (index: number) => void;
  handlePrev: () => void;
  handleNext: () => void;
}

export default function ShlokaSection({ 
  shlokas, 
  current, 
  setCurrent, 
  handlePrev, 
  handleNext 
}: ShlokaSectionProps) {
  return (
    <section
      id="shloka"
      className="bg-gradient-to-br from-[#f9f6f1] to-[#e9d2ad] text-black py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b3d2d]">Shloka of the Day</h2>
          <div className="w-24 h-1 bg-[#8b6914] mx-auto rounded-full"></div>
        </div>

        <div className="relative bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#d5bb96]">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4b3d2d] text-white px-6 py-2 rounded-full text-sm font-semibold">
            {current + 1} of {shlokas.length}
          </div>
          
          <div className="mb-6">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed italic text-[#4b3d2d] mb-4">
              &quot;{shlokas[current].text}&quot;
            </p>
            <div className="w-16 h-0.5 bg-[#8b6914] mx-auto mb-4"></div>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 leading-relaxed">
              {shlokas[current].translation}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-110"
              aria-label="Previous shloka"
            >
              <ChevronLeft size={24} className="text-[#4b3d2d]" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-110"
              aria-label="Next shloka"
            >
              <ChevronRight size={24} className="text-[#4b3d2d]" />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {shlokas.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-[#4b3d2d] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to shloka ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
    </section>
  );
}
