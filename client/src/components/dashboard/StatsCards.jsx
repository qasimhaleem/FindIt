import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, FileBox, Handshake } from 'lucide-react';

const StatsCards = () => {
  const [statsData, setStatsData] = useState({ lost: 0, found: 0, resolved: 0 });
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/items/stats`);
        setStatsData(res.data);
      } catch (err) {
        console.error('Failed to fetch stats', err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [API_URL]);

  const stats = [
    {
      id: 1,
      title: 'Items Lost',
      value: loading ? '...' : statsData.lost.toLocaleString(),
      trend: 'Active reports',
      icon: <Search className="text-red-500" size={24} />,
      bg: 'bg-red-50',
      trendColor: 'text-gray-400'
    },
    {
      id: 2,
      title: 'Items Found',
      value: loading ? '...' : statsData.found.toLocaleString(),
      trend: 'Active reports',
      icon: <FileBox className="text-blue-500" size={24} />,
      bg: 'bg-blue-50',
      trendColor: 'text-gray-400'
    },
    {
      id: 3,
      title: 'Successfully Reunited',
      value: loading ? '...' : statsData.resolved.toLocaleString(),
      trend: 'Resolved cases',
      icon: <Handshake className="text-green-500" size={24} />,
      bg: 'bg-green-50',
      trendColor: 'text-green-600 font-bold'
    }
  ];

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
