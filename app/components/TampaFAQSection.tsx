'use client';

import React, { useState } from 'react';

const TampaFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of venues does James perform at in Tampa?",
      answer: "James performs at a wide variety of Tampa venues including the Tampa Convention Center, Amalie Arena, downtown hotels, corporate spaces, and waterfront resort venues throughout the area."
    },
    {
      question: "How far in advance should I book for a Tampa event?",
      answer: "We recommend booking 4-6 weeks in advance, especially for popular dates during Gasparilla season, healthcare conferences, or major Tampa events. However, we can often accommodate shorter notice requests."
    },
    {
      question: "Does James travel to events outside of downtown Tampa?",
      answer: "Yes, James regularly performs throughout the greater Tampa area including St. Petersburg, Clearwater, and waterfront resort venues."
    },
    {
      question: "What makes James different from other Tampa magicians?",
      answer: "James combines world-class magic with sophisticated corporate entertainment, having performed for major healthcare companies and Fortune 500 companies. His performances are tailored to your specific brand and message."
    },
    {
      question: "Can James perform at outdoor Tampa venues?",
      answer: "Yes, James can perform at outdoor venues throughout Tampa, from waterfront resort parties to Gasparilla events. We'll discuss setup requirements based on your specific venue and weather considerations."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-black py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-semibold text-lg">{faq.question}</span>
                <span className="text-white text-2xl">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TampaFAQSection;
