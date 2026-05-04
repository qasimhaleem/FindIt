import React from 'react';
import ItemInformationCard from '../components/dashboard/report/ItemInformationCard';
import OccurrenceDetailsCard from '../components/dashboard/report/OccurrenceDetailsCard';
import PrivacyCard from '../components/dashboard/report/PrivacyCard';
import PhotoUploadCard from '../components/dashboard/report/PhotoUploadCard';
import ReportingRulesCard from '../components/dashboard/report/ReportingRulesCard';
import SubmitSection from '../components/dashboard/report/SubmitSection';
import RecentRecoveriesCard from '../components/dashboard/report/RecentRecoveriesCard';

const ReportLost = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header section */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-[#0F2D52] mb-4">Report a Lost Item</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Providing detailed information increases the chances of a community member 
          identifying and returning your item. Your report will be visible to our verified network.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column (Main Form) */}
        <div className="xl:col-span-8 flex flex-col">
          <ItemInformationCard />
          <OccurrenceDetailsCard />
          <div className="mt-auto">
            <PrivacyCard />
          </div>
        </div>
        
        {/* Right Column (Side Panels) */}
        <div className="xl:col-span-4 flex flex-col">
          <PhotoUploadCard />
          <ReportingRulesCard />
          <SubmitSection />
          <div className="mt-auto">
            <RecentRecoveriesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportLost;
