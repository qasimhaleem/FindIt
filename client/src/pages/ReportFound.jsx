import React from 'react';
import FoundItemFormCard from '../components/dashboard/report-found/FoundItemFormCard';
import NextStepsCard from '../components/dashboard/report-found/NextStepsCard';
import PrivacyGuaranteedCard from '../components/dashboard/report-found/PrivacyGuaranteedCard';
import NearbyMapWidget from '../components/dashboard/report-found/NearbyMapWidget';

const ReportFound = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-full">
      {/* Header section */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#0F2D52] mb-4">Report a Found Item</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Thank you for being an active community member. Your honesty helps reunite 
          people with their valued possessions.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 flex-grow">
        {/* Left Column (Main Form - Single Card) */}
        <div className="xl:col-span-8 flex flex-col">
          <FoundItemFormCard />
        </div>
        
        {/* Right Column (Side Panels) */}
        <div className="xl:col-span-4 flex flex-col">
          <NextStepsCard />
          <PrivacyGuaranteedCard />
          <div className="mt-auto pt-6">
            <NearbyMapWidget />
          </div>
        </div>
      </div>

      {/* Dashboard Footer */}
      <div className="mt-16 text-center text-[10px] text-gray-400 font-medium">
        © 2024 FindIt Community. Empathetic Professionalism in Lost & Found.
      </div>
    </div>
  );
};

export default ReportFound;
