import React from 'react';
import { Rocket, Award, Globe, Users, Network, ShieldCheck, Lock } from 'lucide-react';
import techAbstractImg from '../assets/tech_abstract_bg.png';

const ComingSoon = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between max-w-6xl mx-auto py-10 min-h-[calc(100vh-140px)]">
      
      {/* Left Column */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        {/* Badge */}
        <div className="bg-[#E6F0FD] text-[#2B6CB0] font-bold text-xs px-4 py-2 rounded-full inline-flex items-center gap-2 mb-8 w-max uppercase tracking-wide">
          <Rocket size={14} />
          Coming Soon
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F2D52] leading-tight mb-6">
          The Smart Network for <span className="text-[#2B6CB0]">AI-Assisted</span> Recovery.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          We're building an intelligent neighborhood watch for your belongings. 
          Our new Smart Tracking feature uses advanced community mesh networks 
          to help locate lost items in real-time, with higher accuracy than ever before.
        </p>

        {/* Form */}
        <div className="relative max-w-md mb-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full pl-6 pr-32 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold px-6 rounded-lg transition-colors text-sm shadow-sm">
            Notify Me
          </button>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-xs mb-12 font-medium">
          <Lock size={12} />
          <span>We value your privacy. No spam, only major updates.</span>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-[#0F2D52]">
          <Award size={24} strokeWidth={2.5} />
          <Globe size={24} strokeWidth={2.5} />
          <Users size={24} strokeWidth={2.5} />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        
        {/* Top Card (Spans full width) */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden shadow-sm aspect-[21/9] bg-gray-900 border border-gray-100 flex items-end">
          <img 
            src={techAbstractImg} 
            alt="Precision Tracking Technology" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-x-4 bottom-4 bg-white/90 backdrop-blur-md rounded-xl p-5 shadow-sm">
            <h3 className="text-[#0F2D52] font-bold text-sm tracking-wide uppercase mb-1">Precision Tracking</h3>
            <p className="text-gray-600 text-xs font-medium">Ultra-wideband connectivity for indoor locating.</p>
          </div>
        </div>

        {/* Bottom Left Card */}
        <div className="bg-[#EAF2FC] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm border border-blue-50">
          <Network className="text-[#2B6CB0] mb-8" size={32} />
          <div>
            <h3 className="text-[#0F2D52] font-bold text-sm mb-2">Community Mesh</h3>
            <p className="text-gray-500 text-xs leading-relaxed font-medium">
              Secure peer-to-peer searching network.
            </p>
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="bg-[#F8FAFC] border border-blue-100 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
          <ShieldCheck className="text-[#0F2D52] mb-8" size={32} />
          <div>
            <h3 className="text-[#0F2D52] font-bold text-sm mb-2">Safe Exchange</h3>
            <p className="text-gray-500 text-xs leading-relaxed font-medium">
              Verified meeting spots for item returns.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;
