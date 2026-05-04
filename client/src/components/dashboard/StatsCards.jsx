import React from 'react';
import { Search, FileBox, Handshake } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Items Lost',
    value: '1,248',
    trend: '+12% from last week',
    icon: <Search className="text-red-500" size={24} />,
    bg: 'bg-red-50',
    trendColor: 'text-gray-400'
  },
  {
    id: 2,
    title: 'Items Found',
    value: '856',
    trend: '+8% from last week',
    icon: <FileBox className="text-blue-500" size={24} />,
    bg: 'bg-blue-50',
    trendColor: 'text-gray-400'
  },
  {
    id: 3,
    title: 'Successfully Reunited',
    value: '512',
    trend: 'New Record',
    icon: <Handshake className="text-green-500" size={24} />,
    bg: 'bg-green-50',
    trendColor: 'text-green-600 font-bold'
  }
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between h-40 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start w-full">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
              {stat.icon}
            </div>
            <span className={`text-xs ${stat.trendColor}`}>{stat.trend}</span>
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
            <h2 className="text-3xl font-bold text-[#0F2D52]">{stat.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
