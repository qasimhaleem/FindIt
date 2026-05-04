import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const ToggleSwitch = ({ initialChecked = false }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  return (
    <div 
      className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${isChecked ? 'bg-[#0F2D52]' : 'bg-gray-200'}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <div 
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? 'translate-x-5' : 'translate-x-0'}`}
      ></div>
    </div>
  );
};

const PreferencesCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <Bell className="text-[#0F2D52]" size={20} />
        <h2 className="text-lg font-bold text-[#0F2D52]">Preferences</h2>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#0F2D52]">Proximity Alerts</p>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Items found within 5km</p>
          </div>
          <ToggleSwitch initialChecked={true} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#0F2D52]">Direct Messages</p>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Community chat notifications</p>
          </div>
          <ToggleSwitch initialChecked={true} />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-[#0F2D52]">Newsletter</p>
            <p className="text-[11px] text-gray-500 font-medium mt-0.5">Monthly recovery stories</p>
          </div>
          <ToggleSwitch initialChecked={false} />
        </div>
      </div>
    </div>
  );
};

export default PreferencesCard;
