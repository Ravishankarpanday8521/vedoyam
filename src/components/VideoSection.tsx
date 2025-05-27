'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Video {
  id: string;
  title: string;
}

interface VideoSectionProps {
  videos: Video[];
  videoIndex: number;
  setVideoIndex: (index: number) => void;
  handlePrevVideo: () => void;
  handleNextVideo: () => void;
}

export default function VideoSection({ 
  videos, 
  videoIndex, 
  setVideoIndex, 
  handlePrevVideo, 
  handleNextVideo 
}: VideoSectionProps) {
  return (
    <section id="videos" className="bg-gradient-to-br from-[#d5bb96] to-[#c49b5f] py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 text-black">
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b3d2d]">Watch Our Videos</h2>
          <div className="w-24 h-1 bg-[#8b6914] mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videos[videoIndex].id}`}
              title={videos[videoIndex].title}
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-4 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-[#4b3d2d] mb-2">
              {videos[videoIndex].title}
            </h3>
            <div className="flex justify-center gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === videoIndex ? 'bg-[#4b3d2d] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Play video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
          <button
            onClick={handlePrevVideo}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft size={24} className="text-[#4b3d2d]" />
          </button>
        </div>
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
          <button
            onClick={handleNextVideo}
            className="bg-white shadow-lg rounded-full p-3 hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight size={24} className="text-[#4b3d2d]" />
          </button>
        </div>
      </div>
      <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
    </section>
  );
}
