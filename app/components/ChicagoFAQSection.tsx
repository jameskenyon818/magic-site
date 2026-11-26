import React from 'react';

const ChicagoFAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you perform at McCormick Place?</h3>
            <p className="text-gray-300 text-base">Yes, James frequently performs at McCormick Place and other major convention venues throughout Chicago. He's experienced with large-scale corporate events and trade shows.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Are you available for financial industry events?</h3>
            <p className="text-gray-300 text-base">Absolutely! James has extensive experience performing at financial services conferences, banking events, and corporate gatherings throughout Chicago's financial district.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you travel to surrounding Chicago areas?</h3>
            <p className="text-gray-300 text-base">Yes, James performs throughout the greater Chicago area including Evanston, Oak Brook, Schaumburg, and other surrounding communities.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">What types of Chicago venues do you perform at?</h3>
            <p className="text-gray-300 text-base">James performs at convention centers, corporate offices, hotels, theaters, and private venues throughout Chicago. He's familiar with the city's diverse business landscape and seasonal considerations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChicagoFAQSection;