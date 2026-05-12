import React from 'react';
import { Download, Save } from 'lucide-react';

const ProfileHeader = ({ onSave, onExport }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 w-full">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-[#0F2D52] mb-2">My Account</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Manage your community identity, preferences, and security settings to 
          keep your neighborhood safe and connected.
        </p>
      </div>
      <div className="flex gap-4 shrink-0">
        <button onClick={onExport} className="bg-white border border-gray-200 hover:bg-gray-50 text-[#0F2D52] font-bold py-2.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-sm">
          <Download size={16} />
          <span>Export Data</span>
        </button>
        <button onClick={onSave} className="bg-[#0F2D52] hover:bg-[#1a3a63] text-white font-bold py-2.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-sm">
          <Save size={16} />
          <span>Save All Changes</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
