import React from 'react';
import { Search, PlusCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActionsCard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#123E6C] rounded-2xl p-6 shadow-md text-white mb-6">
      <h3 className="text-lg font-bold mb-3">Need help fast?</h3>
      <p className="text-sm text-blue-100 leading-relaxed mb-6">
        Reporting an item takes less than 2 minutes and notifies nearby community members immediately.
      </p>
      
      <div className="space-y-3">
        <button onClick={() => navigate('/dashboard/report-lost')} className="w-full bg-white hover:bg-gray-50 text-[#0F2D52] font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
          <Search size={18} />
          <span>I Lost Something</span>
        </button>
        <button onClick={() => navigate('/dashboard/report-found')} className="w-full bg-[#1A5C9D] hover:bg-[#1f6db8] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm border border-[#2B79C4]">
          <PlusCircle size={18} />
          <span>I Found Something</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActionsCard;
