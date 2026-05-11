import React from 'react';
import { MapPin, Calendar, Map as MapIcon } from 'lucide-react';
import { useFormContext } from 'react-hook-form';
import mapImg from '../../../assets/interactive_map.png';

const OccurrenceDetailsCard = () => {
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-8">
        <MapPin className="text-[#0F2D52]" size={22} />
        <h2 className="text-xl font-bold text-[#0F2D52]">Occurrence Details</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Date Lost</label>
          <div className="relative">
            <input 
              type="date"
              {...register('date')}
              placeholder="mm/dd/yyyy" 
              className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Specific Location</label>
          <input 
            type="text" 
            {...register('location')}
            placeholder="e.g. Central Park North Bench" 
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            required
          />
        </div>
      </div>

      {/* Interactive Map Feature Placeholder */}
      <div className="relative w-full h-56 rounded-xl overflow-hidden shadow-inner border border-gray-200">
        <img 
          src={mapImg} 
          alt="Interactive Map" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60"></div>
        
        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <MapIcon className="text-[#0F2D52] mb-2" size={32} />
          <h3 className="font-bold text-[#0F2D52] text-sm mb-1">Interactive Map Feature</h3>
          <p className="text-[10px] text-gray-700 max-w-xs mb-4 font-medium">
            Precision coordinates help our community scanning algorithm find items near you.
          </p>
          <button className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white text-xs font-bold px-6 py-2 rounded-full transition-colors shadow-md">
            Set Map Pin
          </button>
        </div>
      </div>
    </div>
  );
};

export default OccurrenceDetailsCard;
