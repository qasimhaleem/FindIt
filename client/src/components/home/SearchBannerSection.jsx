import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBannerSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/browse');
    }
  };

  return (
    <div className="bg-[#F8FAFC] pb-12 pt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-100">
          <p className="text-xs font-bold text-gray-400 mb-3 ml-2 uppercase tracking-wide">
            What are you looking for?
          </p>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-grow relative flex items-center">
              <Search className="absolute left-4 text-gray-400" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for items, locations, or categories..." 
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button type="button" onClick={() => navigate('/browse')} className="flex items-center justify-center gap-2 px-6 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors">
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </button>
              <button type="submit" className="px-8 py-4 bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold rounded-xl shadow-md transition-colors whitespace-nowrap">
                Search FindIt
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBannerSection;
