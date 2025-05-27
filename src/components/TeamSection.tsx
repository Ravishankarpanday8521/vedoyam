'use client';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

interface TeamSectionProps {
  team: TeamMember[];
  teamIndex: number;
  setTeamIndex: (index: number) => void;
  handleTeamPrev: () => void;
  handleTeamNext: () => void;
}

export default function TeamSection({ 
  team, 
  teamIndex, 
  setTeamIndex, 
  handleTeamPrev, 
  handleTeamNext 
}: TeamSectionProps) {
  return (
    <section id="team" className="bg-gradient-to-br from-[#f9f6f1] to-[#d5bb96] text-black py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b3d2d]">Meet Our Team</h2>
          <div className="w-24 h-1 bg-[#8b6914] mx-auto rounded-full"></div>
        </div>

        <div className="relative bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-2xl max-w-lg mx-auto border border-[#d5bb96]">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#4b3d2d] text-white px-6 py-2 rounded-full text-sm font-semibold">
            {teamIndex + 1} of {team.length}
          </div>
          
          <div className="mb-6">
            <Image
              src={team[teamIndex].image}
              alt={team[teamIndex].name}
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-[#8b6914] object-cover w-32 h-32 sm:w-40 sm:h-40 shadow-lg transition-transform hover:scale-105"
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#4b3d2d] mb-2">{team[teamIndex].name}</h3>
            <p className="text-sm sm:text-base text-[#8b6914] font-semibold mb-4">{team[teamIndex].position}</p>
            
            {/* Dots indicator */}
            <div className="flex justify-center gap-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === teamIndex ? 'bg-[#4b3d2d] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View ${team[index].name}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
            <button
              onClick={handleTeamPrev}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-110"
              aria-label="Previous team member"
            >
              <ChevronLeft size={24} className="text-[#4b3d2d]" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
            <button
              onClick={handleTeamNext}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-110"
              aria-label="Next team member"
            >
              <ChevronRight size={24} className="text-[#4b3d2d]" />
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
    </section>
  );
}
