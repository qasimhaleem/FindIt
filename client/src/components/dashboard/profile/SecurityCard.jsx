import React from 'react';
import { Lock, Key, Smartphone, ChevronRight } from 'lucide-react';

const SecurityCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Lock className="text-[#0F2D52]" size={20} />
        <h2 className="text-lg font-bold text-[#0F2D52]">Security</h2>
      </div>

      <div className="space-y-4">
        {/* Password Item */}
        <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
              <Key size={18} className="text-[#0F2D52]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F2D52]">Password</p>
              <p className="text-[11px] text-gray-500 font-medium mt-0.5">Changed 4 months ago</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>

        {/* 2FA Item */}
        <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
              <Smartphone size={18} className="text-[#0F2D52]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F2D52]">Two-Factor Auth</p>
              <p className="text-[11px] font-bold text-green-600 mt-0.5">Enabled</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
