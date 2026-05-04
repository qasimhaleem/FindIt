import React from 'react';
import iphoneImg from '../../assets/iphone.png';
import goldenRetrieverImg from '../../assets/golden_retriever.png';
import walletImg from '../../assets/wallet.png';

const activities = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    category: 'Electronics',
    location: 'Central Park West',
    date: 'Oct 24, 2023',
    status: 'Matched',
    image: iphoneImg
  },
  {
    id: 2,
    title: 'Golden Retriever',
    category: 'Pets',
    location: 'Sunset Boulevard',
    date: 'Oct 23, 2023',
    status: 'In Search',
    image: goldenRetrieverImg
  },
  {
    id: 3,
    title: 'Leather Wallet',
    category: 'Personal Items',
    location: 'Metro Station A1',
    date: 'Oct 22, 2023',
    status: 'Returned',
    image: walletImg
  }
];

const getStatusBadge = (status) => {
  switch(status) {
    case 'Matched':
      return <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Matched</span>;
    case 'In Search':
      return <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">In Search</span>;
    case 'Returned':
      return <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Returned</span>;
    default:
      return <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">{status}</span>;
  }
};

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-[#0F2D52]">Recent Activity</h2>
        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
          View all reports
        </a>
      </div>

      {/* Table Header */}
      <div className="bg-[#F1F5F9] px-6 py-3 grid grid-cols-12 gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
        <div className="col-span-5">ITEM</div>
        <div className="col-span-3">LOCATION</div>
        <div className="col-span-2">DATE</div>
        <div className="col-span-2 text-right">STATUS</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="p-6 grid grid-cols-12 gap-4 items-center hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="col-span-5 flex items-center gap-4">
              <img src={activity.image} alt={activity.title} className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
              <div>
                <h3 className="font-bold text-[#0F2D52] text-sm">{activity.title}</h3>
                <p className="text-xs text-gray-500">{activity.category}</p>
              </div>
            </div>
            <div className="col-span-3 text-sm text-gray-600">
              {activity.location}
            </div>
            <div className="col-span-2 text-sm text-gray-600">
              {activity.date}
            </div>
            <div className="col-span-2 text-right">
              {getStatusBadge(activity.status)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
