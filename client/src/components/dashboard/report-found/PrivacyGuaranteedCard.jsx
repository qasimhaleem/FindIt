import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyGuaranteedCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Shield className="text-[#0F2D52]" size={20} />
        </div>
        <h3 className="text-[#0F2D52] font-bold">Privacy Guaranteed</h3>
      </div>
      <p className="text-xs text-gray-600 leading-relaxed">
        We never reveal your exact address or contact details. All communication 
        happens through our secure, moderated portal.
      </p>
    </div>
  );
};

export default PrivacyGuaranteedCard;
