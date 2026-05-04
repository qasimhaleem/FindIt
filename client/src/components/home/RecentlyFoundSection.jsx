import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import watchImg from '../../assets/watch.png';
import journalImg from '../../assets/journal.png';
import dogImg from '../../assets/dog.png';
import keysImg from '../../assets/keys.png';

const items = [
  {
    id: 1,
    title: 'Silver Analog Watch',
    location: 'Central Park, NY',
    category: 'ELECTRONICS',
    time: '2h ago',
    image: watchImg,
    status: 'Found'
  },
  {
    id: 2,
    title: 'Leather Journal',
    location: 'Metro Station 9',
    category: 'PERSONAL',
    time: '5h ago',
    image: journalImg,
    status: 'Found'
  },
  {
    id: 3,
    title: 'Small Terrier',
    location: 'Oak Ridge Park',
    category: 'PETS',
    time: '14h ago',
    image: dogImg,
    status: 'Found'
  },
  {
    id: 4,
    title: 'Car Key Fob',
    location: 'Westside Mall',
    category: 'ACCESSORIES',
    time: '2d ago',
    image: keysImg,
    status: 'Found'
  }
];

const RecentlyFoundSection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.status}
                </div>
              </div>
              
              {/* Content Container */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 truncate">{item.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin size={14} className="mr-1" />
                  <span className="truncate">{item.location}</span>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
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
