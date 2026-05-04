import React from 'react';
import { MapPin, LayoutGrid, Calendar } from 'lucide-react';

const SmartFilters = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-[#0F2D52] text-xl font-bold mb-1">Smart Filters</h2>
      <p className="text-gray-500 text-sm mb-6">Refine your search</p>

      <div className="space-y-4">
        {/* City Filter */}
        <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#F1F5F9] text-blue-800 rounded-xl font-medium transition-colors">
          <MapPin size={18} />
          <span>City</span>
        </button>

        {/* Category Filter */}
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
          <LayoutGrid size={18} />
          <span>Category</span>
        </button>

        {/* Date Range Filter */}
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
          <Calendar size={18} />
          <span>Date Range</span>
        </button>
      </div>

      <button className="w-full mt-6 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-medium py-3 rounded-xl transition-colors shadow-md">
        Apply Filters
      </button>
    </div>
  );
};

export default SmartFilters;
