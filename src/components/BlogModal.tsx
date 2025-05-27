'use client';
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface BlogModalProps {
  showBlog: boolean;
  setShowBlog: (show: boolean) => void;
  blogLanguage: 'hindi' | 'sanskrit' | 'english';
  setBlogLanguage: (lang: 'hindi' | 'sanskrit' | 'english') => void;
  blogContent: {
    id: number;
    category: string;
    data: {
      sanskrit: {
        title: string;
        sections: { title: string; content: string; }[];
      };
      hindi: {
        title: string;
        sections: { title: string; content: string; }[];
      };
      english: {
        title: string;
        sections: { title: string; content: string; }[];
      };
    };
  }[];
  currentBlogIndex: number;
  setCurrentBlogIndex: (index: number) => void;
}

export default function BlogModal({
  showBlog,
  setShowBlog,
  blogLanguage,
  setBlogLanguage,
  blogContent,
  currentBlogIndex,
  setCurrentBlogIndex
}: BlogModalProps) {
  if (!showBlog) return null;

  const currentBlog = blogContent[currentBlogIndex];

  const handlePrevBlog = () => {
    setCurrentBlogIndex(currentBlogIndex === 0 ? blogContent.length - 1 : currentBlogIndex - 1);
  };

  const handleNextBlog = () => {
    setCurrentBlogIndex(currentBlogIndex === blogContent.length - 1 ? 0 : currentBlogIndex + 1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full h-full overflow-y-auto relative">
        {/* Header with navigation */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-sm">
          {/* Left side - Previous button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrevBlog}
              className="flex items-center gap-2 bg-gradient-to-r from-[#4b3d2d] to-[#7c624a] text-white px-4 py-2 rounded-full font-semibold hover:from-[#7c624a] hover:to-[#4b3d2d] transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Previous blog"
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold">{currentBlogIndex + 1}</span>
              <span>/</span>
              <span>{blogContent.length}</span>
            </div>
          </div>

          {/* Center - Blog title */}
          <div className="flex-1 text-center">
            <h2 className="text-lg md:text-2xl font-bold text-[#4b3d2d] truncate">
              {currentBlog.category}
            </h2>
          </div>

          {/* Right side - Next button, Language selector, Close button */}
          <div className="flex items-center gap-4">
            {/* Language selector */}
            <select
              value={blogLanguage}
              onChange={(e) => setBlogLanguage(e.target.value as 'hindi' | 'sanskrit' | 'english')}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
            >
              <option value="sanskrit">संस्कृत</option>
              <option value="hindi">हिन्दी</option>
              <option value="english">English</option>
            </select>

            {/* Next button */}
            <button
              onClick={handleNextBlog}
              className="flex items-center gap-2 bg-gradient-to-r from-[#4b3d2d] to-[#7c624a] text-white px-4 py-2 rounded-full font-semibold hover:from-[#7c624a] hover:to-[#4b3d2d] transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Next blog"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} />
            </button>

            {/* Close button */}
            <button
              onClick={() => setShowBlog(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-300"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Blog content */}
        <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-[#4b3d2d] leading-tight">
            {currentBlog.data[blogLanguage].title}
          </h1>

          <div className="space-y-8">
            {currentBlog.data[blogLanguage].sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-xl shadow-sm border-l-4 border-[#8b6914]">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#8b6914] flex items-center gap-2">
                  <span className="w-8 h-8 bg-[#8b6914] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 text-justify font-medium">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Blog navigation dots */}
        <div className="flex justify-center gap-3 py-8 bg-gray-50">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Blogs:</span>
            {blogContent.map((blog, index) => (
              <button
                key={index}
                onClick={() => setCurrentBlogIndex(index)}
                className={`px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
                  index === currentBlogIndex
                    ? 'bg-[#4b3d2d] text-white scale-110 shadow-lg'
                    : 'bg-white text-[#4b3d2d] hover:bg-gray-100 border border-gray-300'
                }`}
                aria-label={`Go to ${blog.category}`}
              >
                {blog.category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
