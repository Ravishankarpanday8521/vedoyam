'use client';
import { BookOpen, Users, Search, Video } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-[#d5bb96] to-[#e9d2ad] py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b3d2d]">About Us</h2>
          <div className="w-24 h-1 bg-[#8b6914] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#4b3d2d] flex items-center gap-2">
                <BookOpen size={20} />
                Our Mission
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                Vedoyam is a platform dedicated to the propagation of the Sanskrit language and its heritage. We believe in the immense power of Sanskrit as a foundation for understanding ancient knowledge, philosophy, and culture.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#4b3d2d] flex items-center gap-2">
                <Users size={20} />
                Our Vision
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                We aim to open up the rich traditions of Sanskrit to modern audiences, whether you're a beginner or an expert. Our goal is to inspire individuals to explore the beauty of Sanskrit and understand its relevance in today's world.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#4b3d2d] flex items-center gap-2">
                <Search size={20} />
                Our Approach
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                We offer a range of content, from beginner lessons to advanced studies, focusing on Sanskrit literature, grammar, and its applications in modern-day education.
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#4b3d2d] flex items-center gap-2">
                <Video size={20} />
                Our Future
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-justify">
                We aim to offer free educational resources to make Sanskrit education accessible to everyone, fostering a new generation of students, scholars, and thinkers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
    </section>
  );
}
