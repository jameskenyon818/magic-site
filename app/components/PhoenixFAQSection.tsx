import React from 'react';

const PhoenixFAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you perform at the Phoenix Convention Center?</h3>
            <p className="text-gray-300 text-base">Yes, James frequently performs at the Phoenix Convention Center and other major convention venues throughout Phoenix. He's experienced with large-scale corporate events and trade shows.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Are you available for tech industry events?</h3>
            <p className="text-gray-300 text-base">Absolutely! James has extensive experience performing at tech conferences, startup events, and corporate gatherings throughout Phoenix's growing tech sector.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you travel to surrounding Phoenix areas?</h3>
            <p className="text-gray-300 text-base">Yes, James performs throughout the greater Phoenix area including Scottsdale, Tempe, Mesa, Chandler, and other surrounding communities.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">What types of Phoenix venues do you perform at?</h3>
            <p className="text-gray-300 text-base">James performs at convention centers, corporate offices, hotels, resorts, and private venues throughout Phoenix. He's familiar with the city's diverse business landscape and desert climate considerations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoenixFAQSection;