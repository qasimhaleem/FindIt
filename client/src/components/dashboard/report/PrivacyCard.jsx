import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex items-start gap-6 mb-6">
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
        <Shield className="text-white" size={28} />
      </div>
      <div>
        <h3 className="text-[#0F2D52] font-semibold text-sm mb-2">Your Privacy is Protected</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We never share your exact location or contact info directly. All communication 
          happens through our secure, moderated portal to ensure your safety and anonymity.
        </p>
      </div>
    </div>
  );
};

export default PrivacyCard;
