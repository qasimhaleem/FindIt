import React from 'react';
import { MapPin, LayoutGrid, Calendar, Filter } from 'lucide-react';

const SmartFilters = ({ filters, onChange, onReset }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h2 className="text-[#0F2D52] text-xl font-bold mb-1">Smart Filters</h2>
      <p className="text-gray-500 text-sm mb-6">Refine your search</p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">City or Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              value={filters.city}
              onChange={(event) => onChange({ city: event.target.value })}
              placeholder="Search location"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Category</label>
          <div className="relative">
            <LayoutGrid className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <select
              value={filters.category}
              onChange={(event) => onChange({ category: event.target.value })}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white appearance-none cursor-pointer"
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Personal Items">Personal Items</option>
              <option value="Pets">Pets</option>
              <option value="Documents">Documents</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Status</label>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <select
              value={filters.status}
              onChange={(event) => onChange({ status: event.target.value })}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white appearance-none cursor-pointer"
            >
              <option value="">All</option>
              <option value="LOST">Lost</option>
              <option value="FOUND">Found</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-2">Date Range</label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="date"
                value={filters.startDate}
                onChange={(event) => onChange({ startDate: event.target.value })}
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="date"
                value={filters.endDate}
                onChange={(event) => onChange({ endDate: event.target.value })}
                className="w-full pl-9 pr-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full mt-6 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-medium py-3 rounded-xl transition-colors shadow-md"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default SmartFilters;
