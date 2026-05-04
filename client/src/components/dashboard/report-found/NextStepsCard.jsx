import React from 'react';
import { ShieldCheck } from 'lucide-react';

const NextStepsCard = () => {
  return (
    <div className="bg-[#123E6C] rounded-2xl p-6 md:p-8 shadow-md text-white relative overflow-hidden mb-6">
      {/* Decorative large circle in background */}
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-48 h-48 bg-[#1A528F] rounded-full opacity-50 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck size={24} className="text-white" />
          <h2 className="text-xl font-bold">Next Steps</h2>
        </div>

        <p className="text-sm text-blue-100 leading-relaxed mb-8">
          Your report will be reviewed by our community safety team before being published to protect privacy.
        </p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-[#2B6CB0] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <p className="text-xs text-blue-50 leading-relaxed">
                <span className="font-bold">Matching:</span> Our AI cross-references your report with existing "Lost" reports in the area.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-[#2B6CB0] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <p className="text-xs text-blue-50 leading-relaxed">
                <span className="font-bold">Verification:</span> If a potential match is found, the owner must provide specific proof of ownership.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-6 h-6 rounded-full bg-[#2B6CB0] flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <p className="text-xs text-blue-50 leading-relaxed">
                <span className="font-bold">Safe Handover:</span> We facilitate a secure chat and suggest public meetup points or police stations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsCard;
