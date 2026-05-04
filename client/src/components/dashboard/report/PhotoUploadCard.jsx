import React from 'react';
import { Image as ImageIcon, UploadCloud, BadgeCheck } from 'lucide-react';

const PhotoUploadCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <ImageIcon className="text-[#0F2D52]" size={20} />
        <h2 className="text-lg font-bold text-[#0F2D52]">Photo Reference</h2>
      </div>

      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors mb-4">
        <UploadCloud className="text-gray-400 mb-4" size={32} />
        <p className="text-sm font-semibold text-gray-700 mb-1">Click to upload or<br/>drag and drop</p>
        <p className="text-[10px] text-gray-400 font-medium">PNG, JPG up to 10MB</p>
      </div>

      <div className="bg-blue-50/80 rounded-xl p-3 flex items-start gap-3">
        <BadgeCheck className="text-[#0F2D52] mt-0.5 flex-shrink-0" size={16} />
        <p className="text-[11px] font-bold text-[#0F2D52] leading-relaxed">
          Clear photos improve recovery chances by 65%.
        </p>
      </div>
    </div>
  );
};

export default PhotoUploadCard;
