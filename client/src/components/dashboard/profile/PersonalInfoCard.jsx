import React from 'react';
import { User, MapPin } from 'lucide-react';

const PersonalInfoCard = () => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <User className="text-[#0F2D52]" size={20} />
          <h2 className="text-lg font-bold text-[#0F2D52]">Personal Information</h2>
        </div>
        <span className="text-xs text-gray-400 italic font-medium">Auto-saved as you type</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Email Address</label>
          <input 
            type="email" 
            defaultValue="julian.anderson@example.com" 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-[#0F2D52] font-medium bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Phone Number</label>
          <input 
            type="text" 
            defaultValue="+1 (555) 012-3456" 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-[#0F2D52] font-medium bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-2">Current City / Primary Search Area</label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0F2D52]" size={18} />
          <input 
            type="text" 
            defaultValue="San Francisco, CA" 
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-[#0F2D52] font-medium bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
