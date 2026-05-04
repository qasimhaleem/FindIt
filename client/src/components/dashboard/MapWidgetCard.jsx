import React from 'react';
import { MapPin } from 'lucide-react';
import dashMapImg from '../../assets/dash_map.png';

const MapWidgetCard = () => {
  return (
    <div className="relative bg-gray-900 rounded-2xl overflow-hidden h-40 shadow-sm border border-gray-100 group cursor-pointer">
      <img 
        src={dashMapImg} 
        alt="Dashboard Map Widget" 
        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Map Pin Marker on the map */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent">
        <div className="flex items-center gap-2 text-white">
          <MapPin size={14} />
          <span className="text-xs font-bold tracking-wide">Active in New York City</span>
        </div>
      </div>
    </div>
  );
};

export default MapWidgetCard;
