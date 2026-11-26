import React from 'react';

const OrlandoFAQSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-8">
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you perform at the Orange County Convention Center?</h3>
            <p className="text-gray-300 text-base">Yes, James frequently performs at the Orange County Convention Center and other major convention venues throughout Orlando. He's experienced with large-scale corporate events and trade shows.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Are you available for Disney resort events?</h3>
            <p className="text-gray-300 text-base">Absolutely! James has performed at various Disney properties and resorts throughout Orlando. He understands the unique requirements and atmosphere of theme park corporate events.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Do you travel to surrounding Orlando areas?</h3>
            <p className="text-gray-300 text-base">Yes, James performs throughout the greater Orlando area including Kissimmee, Lake Buena Vista, Winter Park, and other surrounding communities.</p>
          </div>
          
          <div className="bg-black p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">What types of Orlando venues do you perform at?</h3>
            <p className="text-gray-300 text-base">James performs at convention centers, theme park resorts, corporate offices, hotels, and private venues throughout Orlando. He's familiar with the city's tourism and entertainment industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrlandoFAQSection;