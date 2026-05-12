import React from 'react';
import { MapPin } from 'lucide-react';
import isoMapImg from '../../../assets/isometric_map.png';

const NearbyMapWidget = () => {
  return (
    <div className="relative bg-[#1A4B5C] rounded-2xl overflow-hidden shadow-md group cursor-pointer aspect-video">
      <img 
        src={isoMapImg} 
        alt="Isometric Map" 
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
      />
      
      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2633] via-transparent to-transparent opacity-90"></div>

      {/* Content at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pb-5 flex items-center justify-center gap-2 text-white">
        <MapPin size={14} className="text-white" />
        <span className="text-xs font-bold tracking-wide">12 items found nearby today</span>
      </div>
    </div>
  );
};

export default NearbyMapWidget;
