import React from 'react';

const HoustonFAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you perform at the George R. Brown Convention Center?</h3>
            <p className="text-gray-300 text-base">Yes, James frequently performs at the George R. Brown Convention Center and other major convention venues throughout Houston. He's experienced with large-scale corporate events and trade shows.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Are you available for energy industry events?</h3>
            <p className="text-gray-300 text-base">Absolutely! James has extensive experience performing at energy industry conferences, oil and gas events, and corporate gatherings throughout Houston's energy sector.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you travel to surrounding Houston areas?</h3>
            <p className="text-gray-300 text-base">Yes, James performs throughout the greater Houston area including The Woodlands, Sugar Land, Katy, and other surrounding communities.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">What types of Houston venues do you perform at?</h3>
            <p className="text-gray-300 text-base">James performs at convention centers, corporate offices, hotels, medical centers, and private venues throughout Houston. He's familiar with the city's diverse business landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoustonFAQSection;