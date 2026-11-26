'use client';

import React, { useState } from 'react';

const MiamiFAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of venues does James perform at in Miami?",
      answer: "James performs at a wide variety of Miami venues including the Miami Beach Convention Center, American Airlines Arena, South Beach hotels, downtown corporate spaces, and private estates throughout the city."
    },
    {
      question: "How far in advance should I book for a Miami event?",
      answer: "We recommend booking 4-6 weeks in advance, especially for popular dates during Art Basel, Miami Art Week, or major Miami events. However, we can often accommodate shorter notice requests."
    },
    {
      question: "Does James travel to events outside of downtown Miami?",
      answer: "Yes, James regularly performs throughout the greater Miami area including Miami Beach, Coral Gables, Aventura, and Fort Lauderdale venues."
    },
    {
      question: "What makes James different from other Miami magicians?",
      answer: "James combines world-class magic with sophisticated corporate entertainment, having performed for major luxury brands and Fortune 500 companies. His performances are tailored to your specific brand and message."
    },
    {
      question: "Can James perform at outdoor Miami venues?",
      answer: "Yes, James can perform at outdoor venues throughout Miami, from rooftop parties in South Beach to beach events in Key Biscayne. We'll discuss setup requirements based on your specific venue."
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

export default MiamiFAQSection;