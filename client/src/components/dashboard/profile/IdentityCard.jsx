import React from 'react';
import { BadgeCheck, Camera } from 'lucide-react';
import avatarImg from '../../../assets/julian_avatar.png';

const IdentityCard = () => {
  return (
    <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-6 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none rounded-r-2xl"></div>

      <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">

        <div className="relative shrink-0">
          <img
            src={avatarImg}
            alt="Julian Anderson"
            className="w-28 h-28 rounded-2xl  shadow-sm border-2 border-white"
          />
          <button className="absolute -bottom-2 -right-2 bg-white text-[#0F2D52] p-2 rounded-lg shadow-md border border-gray-100 hover:bg-gray-50 transition-colors">
            <Camera size={16} />
          </button>
        </div>

        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-[#0F2D52]">Julian Anderson</h2>
            <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide uppercase">
              <BadgeCheck size={12} />
              <span>Verified</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Member since August 2023 • Community Contributor
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-6 py-3 text-center min-w-[110px]">
              <div className="text-2xl font-bold text-[#0F2D52] mb-1">12</div>
              <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">Lost Reported</div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-6 py-3 text-center min-w-[110px]">
              <div className="text-2xl font-bold text-[#0F2D52] mb-1">08</div>
              <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">Found Items</div>
            </div>
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl px-6 py-3 text-center min-w-[110px]">
              <div className="text-2xl font-bold text-blue-600 mb-1">142</div>
              <div className="text-[9px] text-gray-500 font-bold tracking-wider uppercase">Trust Score</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IdentityCard;
