import React from 'react';

const AustinFAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you perform at events in downtown Austin?</h3>
            <p className="text-gray-300 text-base">Yes, James frequently performs at venues throughout downtown Austin, including the Austin Convention Center, ACL Live, and hotels in the entertainment district.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Are you available for SXSW events?</h3>
            <p className="text-gray-300 text-base">Absolutely! James has extensive experience performing at SXSW events, tech conferences, and startup gatherings throughout Austin. He understands the unique energy of Austin's tech scene.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you travel to surrounding Austin areas?</h3>
            <p className="text-gray-300 text-base">Yes, James performs throughout the greater Austin area including Round Rock, Cedar Park, Lake Travis, and other surrounding communities.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">What types of Austin venues do you perform at?</h3>
            <p className="text-gray-300 text-base">James performs at corporate offices, hotels, convention centers, music venues, private clubs, and outdoor events throughout Austin. He's familiar with the city's unique venues and event culture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustinFAQSection;