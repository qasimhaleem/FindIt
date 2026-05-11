import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import watchImg from '../../assets/watch.png'; // Fallback image

const RecentlyFoundSection = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchItems = async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
        const res = await axios.get(`${API_BASE}/api/items?type=found&limit=4`);
        if (isMounted) {
          setItems(res.data.items || []);
        }
      } catch (err) {
        console.error('Failed to fetch recently found items', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchItems();
    return () => { isMounted = false; };
  }, []);

  return (
    <div className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-3">Active Search</p>
            <h2 className="text-3xl font-bold text-[#0F2D52]">Recently Found Items</h2>
          </div>
          <Link to="/browse" className="hidden md:flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View All Items <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500 font-medium">Loading recent items...</div>
        ) : items.length === 0 ? (
          <div className="text-center py-10 text-gray-500 font-medium">No recently found items yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => {
              const itemDate = item.createdAt ? new Date(item.createdAt) : new Date();
              const timeString = itemDate.toLocaleDateString();
              
              return (
                <div 
                  key={item._id} 
                  onClick={() => navigate(`/items/${item._id}`)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.itemName} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                    ) : (
                      <img 
                        src={watchImg} 
                        alt={item.itemName} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                    )}
                    <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                      {item.type}
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="font-bold text-gray-900 mb-2 truncate">{item.itemName}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <MapPin size={14} className="mr-1 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded truncate max-w-[60%]">
                        {item.category}
                      </span>
                      <span className="text-gray-400 text-xs flex-shrink-0">{timeString}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        <div className="mt-8 md:hidden flex justify-center">
          <Link to="/browse" className="flex items-center text-blue-600 font-medium">
            View All Items <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentlyFoundSection;
