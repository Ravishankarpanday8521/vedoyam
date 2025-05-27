'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  className?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is Vedoyam?",
    answer: "Vedoyam is a platform dedicated to preserving and promoting Sanskrit language and Vedic knowledge. We provide educational resources, daily shlokas, and research materials to help people connect with India's ancient wisdom.",
    category: "General"
  },
  {
    question: "How can I learn Sanskrit through Vedoyam?",
    answer: "Vedoyam offers various learning resources including daily shlokas with translations, Sanskrit grammar lessons, and educational videos. Our content is designed for learners at all levels, from beginners to advanced students.",
    category: "Learning"
  },
  {
    question: "What is the difference between Vedic Sanskrit and Classical Sanskrit?",
    answer: "Vedic Sanskrit is the older form of Sanskrit used in the Vedas and other ancient texts, while Classical Sanskrit was standardized by Panini in his Ashtadhyayi. Vedic Sanskrit has more archaic features and different grammatical rules compared to Classical Sanskrit.",
    category: "Sanskrit"
  },
  {
    question: "Are the shlokas provided with translations?",
    answer: "Yes, all our shlokas come with translations in Hindi and English, along with detailed explanations of their meaning and significance. We also provide pronunciation guides to help with proper recitation.",
    category: "Content"
  },
  {
    question: "How often is new content added to Vedoyam?",
    answer: "We regularly update our content with new shlokas, educational articles, and videos. Daily shlokas are added regularly, and we publish new educational content weekly.",
    category: "Content"
  },
  {
    question: "Can I contribute to Vedoyam?",
    answer: "Yes! We welcome contributions from Sanskrit scholars, students, and enthusiasts. You can join our team by contacting us through our website or social media channels.",
    category: "Community"
  },
  {
    question: "What ancient universities are covered in your content?",
    answer: "We cover the history and significance of ancient Indian universities like Takshashila (Taxila), Nalanda, Vikramashila, and others that were centers of learning for Sanskrit, philosophy, and various sciences.",
    category: "History"
  },
  {
    question: "Is Vedoyam content suitable for academic research?",
    answer: "Yes, our content is researched and verified by Sanskrit scholars. We provide authentic translations and interpretations that can be used for academic purposes, though we recommend cross-referencing with primary sources.",
    category: "Academic"
  }
];

export default function FAQ({ faqs = defaultFAQs, title = "Frequently Asked Questions", className = "" }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Generate structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`py-16 px-4 ${className}`} id="faq">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Sanskrit learning, Vedic knowledge, and our educational resources.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-4 text-gray-700 leading-relaxed"
                >
                  {faq.answer}
                  {faq.category && (
                    <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {faq.category}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have more questions? We'd love to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
