import React from 'react';
import { ShieldCheck } from 'lucide-react';
import heroImg from '../../assets/hero_bg.png';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="pr-0 md:pr-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F2D52] leading-tight mb-6">
            Connecting Lost Belongings with Kind Finders.
          </h1>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            FindIt is a community-driven platform built on trust and empathy. 
            Whether you've lost something precious or found something that isn't yours, 
            we're here to help make the reunion happen.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-medium rounded-lg transition-colors">
              Report Lost Item
            </button>
            <button className="px-6 py-3 bg-[#EBF1FF] hover:bg-[#d6e2ff] text-[#0F2D52] font-medium rounded-lg transition-colors">
              Found an Item
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Decorative background shape */}
          <div className="absolute inset-0 bg-[#EBF1FF] rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
          
          <img 
            src={heroImg} 
            alt="Two men shaking hands" 
            className="w-full h-auto rounded-3xl object-cover shadow-lg aspect-[4/3]"
          />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-bounce-slow">
            <div className="bg-[#EBF1FF] p-2 rounded-full text-[#0F2D52]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-bold text-[#0F2D52]">12k+ Reunited</p>
              <p className="text-xs text-gray-500">Community verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
