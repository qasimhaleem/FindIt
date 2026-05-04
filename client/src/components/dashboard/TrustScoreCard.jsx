import React from 'react';
import { CheckCircle2, BadgeCheck } from 'lucide-react';

const TrustScoreCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-2 mb-6">
        <BadgeCheck className="text-blue-600" size={20} />
        <h3 className="font-bold text-[#0F2D52]">Community Trust</h3>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-gray-600 leading-relaxed">
            100% of reported items are verified by our community moderators.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
          <p className="text-xs text-gray-600 leading-relaxed">
            Your personal data is encrypted and only shared during secure handovers.
          </p>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-[#0F2D52]">Trust Score</span>
          <span className="text-sm font-bold text-blue-600">98%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '98%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default TrustScoreCard;
