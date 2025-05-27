'use client';
import { Users, Phone } from "lucide-react";

interface JoinTeamSectionProps {
  setShowBlog: (show: boolean) => void;
}

export default function JoinTeamSection({ setShowBlog }: JoinTeamSectionProps) {
  return (
    <section
      id="join"
      className="bg-gradient-to-br from-[#f9f6f1] to-[#e9d2ad] text-black py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4b3d2d]">Join Our Team</h2>
          <div className="w-24 h-1 bg-[#8b6914] mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#4b3d2d] flex items-center gap-2">
                <Users size={24} />
                Be Part of Our Mission
              </h3>
              <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700">
                Are you passionate about Sanskrit and eager to contribute to spreading its knowledge?
                We are looking for dedicated individuals to join our growing team.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                Apply now and become a part of our mission to promote the beauty and wisdom of Sanskrit!
              </p>
            </div>
            
            <div className="bg-[#4b3d2d] text-white p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Phone size={20} />
                Get In Touch
              </h4>
              <p className="text-base mb-4">
                📞 Call Now: 
                <a href="tel:+917654049394" className="block text-lg font-bold hover:text-[#d5bb96] transition-colors">
                  +91 7654049394
                </a>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="flex-1 px-6 py-3 bg-white text-[#4b3d2d] rounded-full font-semibold hover:bg-[#f9f6f1] transition-all duration-300 hover:scale-105 text-center"
                  aria-label="Contact us button"
                >
                  Contact Us
                </a>
                <button
                  onClick={() => setShowBlog(true)}
                  className="flex-1 px-6 py-3 bg-[#8b6914] text-white rounded-full font-semibold hover:bg-[#a67c1a] transition-all duration-300 hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-t-4 border-[#4b3d2d] my-10" />
    </section>
  );
}
