import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrustVerifiedCard = () => {
  return (
    <Link to="/dashboard/settings" className="block">
      <div className="bg-gradient-to-br from-[#0F2D52] to-[#1a3a63] rounded-2xl p-6 shadow-md text-white relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
        {/* Shine effect */}
        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 border border-white/20">
            <ShieldCheck size={24} className="text-blue-300" />
          </div>
          <h3 className="font-bold text-lg mb-2">Trust Verified Account</h3>
          <p className="text-blue-100 text-xs leading-relaxed mb-4">
            You've completed identity verification. Your reports are prioritized.
          </p>
          <div className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-blue-200 border border-blue-400/30 px-3 py-1.5 rounded-full">
            <Info size={12} />
            <span>Learn more</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrustVerifiedCard;
