import React from 'react';
import { Users } from 'lucide-react';
import avatar1 from '../../../assets/avatar_1.png';
import avatar2 from '../../../assets/avatar_2.png';
import avatar3 from '../../../assets/avatar_3.png';

const RecentRecoveriesCard = () => {
  return (
    <div className="bg-[#2D3748] rounded-2xl p-6 shadow-md text-white">
      <Users className="text-gray-300 mb-4" size={20} />
      <h3 className="text-sm font-semibold mb-6">Recent Recoveries</h3>
      
      <div className="flex items-center mb-4">
        <div className="flex -space-x-3">
          <img className="w-10 h-10 rounded-full border-2 border-[#2D3748] object-cover" src={avatar1} alt="User 1" />
          <img className="w-10 h-10 rounded-full border-2 border-[#2D3748] object-cover" src={avatar2} alt="User 2" />
          <img className="w-10 h-10 rounded-full border-2 border-[#2D3748] object-cover" src={avatar3} alt="User 3" />
        </div>
        <div className="ml-3 text-xs font-bold bg-gray-700 px-2 py-1 rounded-full">
          +124
        </div>
      </div>
      
      <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
        Items reunited this week in your area.
      </p>
    </div>
  );
};

export default RecentRecoveriesCard;
