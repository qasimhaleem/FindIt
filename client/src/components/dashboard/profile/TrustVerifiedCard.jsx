import React from 'react';
import { Shield } from 'lucide-react';

const TrustVerifiedCard = () => {
  return (
    <div className="bg-[#123E6C] rounded-2xl p-6 md:p-8 shadow-md text-white relative overflow-hidden mb-6">
      {/* Decorative large shield background watermark */}
      <Shield className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 text-[#1A528F] opacity-50 pointer-events-none" size={160} strokeWidth={1} />

      <div className="relative z-10">
        <div className="w-10 h-10 border border-blue-400 rounded-lg flex items-center justify-center mb-6">
          <Shield size={20} className="text-white" />
        </div>

        <h3 className="text-lg font-bold mb-3">Trust Verified</h3>
        <p className="text-xs text-blue-100 leading-relaxed mb-8">
          Your identity has been verified through community endorsement and ID check. 
          This increases your chances of successful reunions.
        </p>

        <button className="w-full bg-white hover:bg-gray-50 text-[#0F2D52] font-bold py-3 rounded-xl transition-colors shadow-sm text-sm">
          View Verification Details
        </button>
      </div>
    </div>
  );
};

export default TrustVerifiedCard;
