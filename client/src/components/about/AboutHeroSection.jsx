import React from 'react';
import officeTeamImg from '../../assets/office_team.png';

const AboutHeroSection = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F2D52] mb-6">
              About FindIt
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              In the bustling streets of Karachi, the historic lanes of Lahore, and 
              across every corner of Pakistan, precious belongings often go missing. 
              FindIt was born from a simple yet profound mission: to leverage technology 
              and community empathy to reunite people with their lost items, fostering a 
              culture of integrity and trust throughout our nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-medium rounded-lg transition-colors">
                Our Mission
              </button>
              <button className="px-8 py-3 bg-white text-[#0F2D52] border border-gray-300 hover:border-[#0F2D52] font-medium rounded-lg transition-colors">
                Join Community
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Blue Background Square */}
            <div className="absolute inset-0 bg-[#75B1D8] rounded-2xl transform translate-x-8 -translate-y-8"></div>
            
            <img 
              src={officeTeamImg} 
              alt="FindIt team working" 
              className="relative z-10 w-full rounded-xl shadow-lg object-cover aspect-[4/3]"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-8 bg-[#2563EB] text-white rounded-xl shadow-xl p-4 z-20">
              <p className="font-bold text-xl">10k+</p>
              <p className="text-xs uppercase tracking-wider font-semibold opacity-90">Items Returned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
